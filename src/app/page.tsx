"use client";
import React, { useEffect } from "react";
import FormFilter from "@/Sections/sellers/components/Forms/FormFilter";
import { SellerAllComponents } from "@/Sections/sellers/MainSeller";
import { redirect } from "next/navigation";
import userStore from "@/guards/userstore";
import { AccountComponents } from "@/components/notifications/account/AccountComponents";
import { webApiServices } from "@/services/webApiServices";

export default function Home() {
  const [isSeller, setIsSeller] = React.useState(false)
  const sessionStatus: boolean = userStore ? true : false;


  // VALIDO SI EL USUARIO TIENE CUENTA SELLERS CREADA
  const handleValidateSeller = async () => {
    const isSeller = await webApiServices.getValidateIfTheUserSellsByUserIdServices(userStore?.user?.id as string)

    setIsSeller(isSeller)
  }


  useEffect(() => {
    if (!sessionStatus) {
      redirect("/auth");
    }
    handleValidateSeller()
  }, [sessionStatus]);

  return (
    <div>
      {!isSeller && (<AccountComponents />)}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:max-w-[20%] bg-white pt-24 text-start p-6">
          <div className="flex flex-col gap-2 bg-gray-50 p-2 rounded-3 ">
            <span className="text-xl font-bold text-black font-sans">Servicios y Productos</span>
            <p className="text-gray-500 text-md">Encuentra los mejores servicios y productos en línea</p>
            <p className="text-gray-500 text-md "> 124 Resultados</p>
          </div>
        </div>
        <div className="w-full lg:max-w-[80%]">
          <div className="lg:pt-24 pt-12 bg-blue-50 flex flex-col items-center justify-center h-auto rounded-xl p-4">
            <div className="w-full">
              <FormFilter />
            </div>
            <div>
              <SellerAllComponents />
            </div>
          </div>


        </div>
      </div >
    </div>
  );
}
