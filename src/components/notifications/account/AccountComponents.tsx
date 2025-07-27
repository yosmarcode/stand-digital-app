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
        <div className=" lg:flex lg:flex-row flex-col bg-white border-2 rounded-md p-10 w-full flex justify-around fixed-bottom shadow-lg shadow-blue-500">
          <div className=" float-end pt-1 cursor-pointer" onClick={handOpen}>
            <ImageComponents src={CloseCircle} alt="" className="size-16" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-black ">
              ¿No tienes cuenta?
            </span>
            <span className="text-black ">
              Es necesario crear cuenta para poder comprar y calificar productos
              y tiendas
            </span>

          </div>

          <span className="bg-blue-500 hover:bg-blue-600  text-white rounded-3xl text-xl w-60 h-12 p-2 text-center hover:cursor-pointer ">
            ¡Create una!
          </span>
        </div>
      )}
    </>
  );
}
