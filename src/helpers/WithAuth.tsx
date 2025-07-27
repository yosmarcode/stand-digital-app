"use client";
import { sessionStatuStorage } from "@/constants";
import { redirect } from "next/navigation";
import { ComponentType, useEffect } from "react";

export default function WithAuthProtect<P extends object>(Component: ComponentType<P>) {
  const sessionStatus = sessionStatuStorage as boolean;
  return function WithAuthProtect(props: P) {
    useEffect(() => {
      if (!sessionStatus) {
        redirect("/");
      }
    }, []);

    if (!sessionStatus) {
      return null;
    }

    return <Component {...props} />;
  };
}
