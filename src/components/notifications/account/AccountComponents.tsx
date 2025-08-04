"use client";
import React from "react";
import CloseCircle from "@/assets/icons/CloseCircle.svg";
import { ImageComponents } from "@/components/imageComponents/ImageComponents";
import ModalComponents from "@/components/ui/ModalComponents";
import FormAddSellers from "@/Sections/dashboard/components/Form/FormAddSellers";

export function AccountComponents() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const handOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 end-0 z-[60] sm:max-w-[400px] w-full mx-auto p-8 bg-white rounded-2xl gap-4">
          <div className=" float-end pt-1 cursor-pointer" onClick={handOpen}>
            <ImageComponents src={CloseCircle} alt="" className="size-16" />
          </div>
          <div className="flex flex-col gap-4 mt-2 mb-2">
            <span className="text-2xl text-black ">
              ¿Quieres Promocionar tu Emprendimiento?
            </span>
            <span className="text-black ">
              Registrate para poder promocionar tu emprendimiento
            </span>
          </div>
          <div className="flex items-center justify-start p-2">

            <ModalComponents
              titleModal="¡Activa tu cuenta!"
              titleButton="¡Activa tu cuenta!"
              chiledrenBody={<FormAddSellers />}
            />
          </div>
        </div>
      )}
    </>
  );
}
