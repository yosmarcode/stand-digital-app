"use client";
import React from "react";
import SectionsComponents from "@/Sections/SectionsComponents";
import { SellerAllComponents } from "@/Sections/sellers/MainSeller";
import FormFilter from "@/Sections/sellers/components/Forms/FormFilter";

export default function Home() {

  return (
    <div className="w-full h-screen">
      <div className=" sticky top-0  pt-22">
        <FormFilter />
      </div>
      <SectionsComponents
        childrenComponent={<SellerAllComponents />}
        className=" bg-blue-50 flex flex-col items-center justify-center "
        id="sellers" />
    </div>
  );
}
