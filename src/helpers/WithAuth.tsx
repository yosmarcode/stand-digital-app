"use client";
import { redirect } from "next/navigation";
import { ComponentType, useEffect } from "react";
import userStore from "@/guards/userstore";

export default function WithAuthProtect<P extends object>(Component: ComponentType<P>) {
  const sessionStatus: boolean = userStore ? true : false;
  return function WithAuthProtect(props: P) {
    useEffect(() => {
      if (!sessionStatus) {
        redirect("/auth");
      }
    }, []);

    if (!sessionStatus) {
      return null;
    }

    return <Component {...props} />;
  };
}
