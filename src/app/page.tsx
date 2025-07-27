"use client";
import React from "react";
import SectionsComponents from "@/Sections/SectionsComponents";
import FormFilter from "@/Sections/sellers/components/Forms/FormFilter";
import { SellerAllComponents } from "@/Sections/sellers/MainSeller";

export default function Home() {

  return (
    <div className="w-full">
      <div className=" pt-22">
        <FormFilter />
      </div>
      <SectionsComponents
        childrenComponent={<SellerAllComponents />}
        className=" bg-blue-50 flex flex-col items-center justify-center h-screen"
        id="sellers" />
    </div>
  );
}
