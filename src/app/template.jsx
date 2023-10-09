"use client"
import AdminLayout from "@/components/Layouts/Admin";
import HomeLayout from "@/components/Layouts/Front/Home";
import { usePathname } from 'next/navigation';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Template({ children,props }) {
    const pathName = usePathname();
    const newSplitPathName = pathName.split('/')
    return (
      <>
        
        {
          newSplitPathName[1] ==='admin'?
            <AdminLayout {...props}>
              <ToastContainer />
              {children}</AdminLayout>
          :
            <HomeLayout headerType={newSplitPathName[1]}>{children}</HomeLayout>
        }
      </>
    )
  }