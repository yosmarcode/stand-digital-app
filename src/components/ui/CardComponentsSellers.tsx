"use client"
import { ImageComponents } from "../imageComponents/ImageComponents"
import { StaticImageData } from "next/image";

import BadgeComponents from "./Badge/BadgeComponents";
export function CardComponentsSellers({
    imageSrc,
    title,
    description,
    category,
}: {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
    category: {
        id: number;
        description: string;
    };
}) {
    return (
        <div className="max-w-[300px] min-h-[300px] flex flex-col gap-2 bg-white rounded-xl border-2 border-gray-200 p-2 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-64">
                <ImageComponents src={imageSrc} alt={title ?? 'image'} width={300} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col gap-2 pt-4 text-center">
                <span className="font-bold text-lg text-black">{title.toLocaleUpperCase() ?? ''}</span>
                <span className="text-sm text-black">{description}</span>
                <BadgeComponents className="px-6 pt-4 pb-2" category={category} handClick={() => console.log('category', category)} />

            </div>
        </div>
    )
}