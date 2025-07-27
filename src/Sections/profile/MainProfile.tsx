import { LoadingComponents } from "@/components/loading/LoadingComponent";
import CardComponentsV2 from "@/components/ui/CardComponentsV2";
import { Suspense } from "react";
import MenuProfile from "./components/Menu/MenuProfile";

export default function MainProfile() {
    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="grid grid-cols-2 pt-24 gap-x-2 gap-y-4">
                <div className="col-span-1">
                    <CardComponentsV2 title="Menú" childreComponents={<MenuProfile />} />
                </div>
                <div className="col-span-1">
                    <CardComponentsV2 title="Perfil" childreComponents={<h1>Perfil</h1>} />
                </div>
            </div>
        </Suspense>
    )
}