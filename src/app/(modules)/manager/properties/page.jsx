"use client";
import PropertieAllData from "@/components/Front/Properties/PropertieAllData";
import { useAuth } from "@/context/UserContext";
import { getCookie } from "cookies-next";

const Properties = () => {
  const {navigate}  = useAuth();
  if(!getCookie('token')){
    navigate.push('/')
  }
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
