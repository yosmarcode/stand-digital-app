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
    <div className="w-full">
      <div className=" pt-22">
        <FormFilter />
      </div>
      <SectionsComponents
        childrenComponent={<SellerAllComponents />}
        className=" bg-blue-50 flex flex-col items-center justify-center h-auto"
        id="sellers" />
    </div>
  );
}
