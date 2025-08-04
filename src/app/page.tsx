"use client";
import React, { useEffect } from "react";
import FormFilter from "@/Sections/sellers/components/Forms/FormFilter";
import { SellerAllComponents } from "@/Sections/sellers/MainSeller";
import { redirect } from "next/navigation";
import userStore from "@/guards/userstore";
import { AccountComponents } from "@/components/notifications/account/AccountComponents";
import { webApiServices } from "@/services/webApiServices";
import PagesSellersList from "@/Sections/sellers/PagesSellersList";
import { ContextSellerListProvider } from "@/Sections/sellers/context/ContextSellerList";

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
      <ContextSellerListProvider>
        <PagesSellersList />
      </ContextSellerListProvider>
    </div >
  );
}
