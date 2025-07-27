import { LoadingComponents } from "@/components/loading/LoadingComponent";
import CardComponentsV2 from "@/components/ui/CardComponentsV2";
import { Suspense } from "react";
import MenuProfile from "./components/Menu/MenuProfile";
import ToBacks from "@/components/ToBack/ToBacks";

export default function MainProfile() {
    return (
        <Suspense fallback={<LoadingComponents />}>

            <div className="flex flex-col gap-y-4 h-screen w-full lg:w-[60rem] mx-auto lg:pt-36 pt-12">
                <ToBacks />
                <div className="w-full">
                    <CardComponentsV2 title="" childreComponents={<MenuProfile />} />
                </div>

            </div>
        </Suspense>
    )
}