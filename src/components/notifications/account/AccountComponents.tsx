"use client";
import React from "react";
import CloseCircle from "@/assets/icons/CloseCircle.svg";
import { ImageComponents } from "@/components/imageComponents/ImageComponents";

export function AccountComponents() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const handOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-8 bg-white rounded-2xl gap-4">
          <div className=" float-end pt-1 cursor-pointer" onClick={handOpen}>
            <ImageComponents src={CloseCircle} alt="" className="size-16" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl text-black ">
              ¿No tienes cuenta?
            </span>
            <span className="text-black ">
              Es necesario crear cuenta para poder comprar y calificar productos
              y tiendas
            </span>
          </div>
          <div className="flex items-center justify-start p-2">

            <span className="bg-blue-500 hover:bg-blue-600  text-white rounded-3xl text-xl w-60 h-12 p-2 text-center hover:cursor-pointer ">
              ¡Crear una!
            </span>
          </div>
        </div>
      )}
    </>
  );
}
