"use client";
import React, { useEffect } from "react";
import SectionsComponents from "@/Sections/SectionsComponents";
import FormFilter from "@/Sections/sellers/components/Forms/FormFilter";
import { SellerAllComponents } from "@/Sections/sellers/MainSeller";
import { redirect } from "next/navigation";
import userStore from "@/guards/userstore";

export default function Home() {

  const sessionStatus: boolean = userStore ? true : false;
  useEffect(() => {
    if (!sessionStatus) {
      redirect("/auth");
    }
  }, [sessionStatus]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:max-w-[20%] bg-white" />
        <div className="w-full lg:max-w-[80%]">
          <div className="pt-22 bg-blue-50 flex flex-col items-center justify-center h-auto rounded-5">
            <FormFilter />
            <div>
              <SellerAllComponents />
            </div>
          </div>


        </div>
      </div >
    </div>
  );
}
