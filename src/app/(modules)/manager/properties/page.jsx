"use client";
import PropertieAllData from "@/components/Front/Properties/PropertieAllData";
import { useAuth } from "@/context/UserContext";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Properties = () => {
  const router = useRouter();
  useEffect(() => {
    if(!getCookie('token')){
      router.push('/');
    }
  }, []);
  return (
    <>
      <section className="pt-14">
        <div className="px-10">
            <PropertieAllData />
        </div>
      </section>
    </>
  );
};

export default Properties;
