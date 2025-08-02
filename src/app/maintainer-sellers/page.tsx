"use client"
import MaintainerSellers from "@/Sections/maintainerSellers/MaintainerSellers"
import SectionsComponents from "@/Sections/SectionsComponents"
export default function PageConfigSellers() {
    return (
        <div className="w-full h-auto">
            <SectionsComponents
                childrenComponent={<MaintainerSellers />}
                className=" bg-blue-50 flex flex-col mb-4 "
                id="maintainer-sellers" />
        </div>
    )
}