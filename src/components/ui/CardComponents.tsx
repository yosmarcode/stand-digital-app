"use client"
import { ImageComponents } from "../imageComponents/ImageComponents"
import { StaticImageData } from "next/image";
export function CardComponents({
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
        <div className="max-w-[400px] min-h-[400px] flex flex-col gap-2 bg-white rounded-xl border-2 border-gray-200 p-2 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-64">
                <ImageComponents src={imageSrc.toString()} alt={title ?? 'image'} width={200} className="w-full h-full aspect-[1/1] object-cover rounded-xl" />
            </div>
            <div className="flex flex-col gap-2 pt-4 text-center">
                <span className="font-bold text-xl text-black">{title.toLocaleUpperCase() ?? 'title'}</span>
                <span className="text-md text-black">{description}</span>
                <div className="px-6 pt-4 pb-2">
                    <span className="text-md text-blue-500 hover:text-blue-600 hover:cursor-pointer rounded-md p-1 border-1 border-blue-500 hover:border-blue-600 transition-all duration-300">{category.description}</span>
                </div>

            </div>
        </div>
    )
}