import { LoadingComponents } from "@/components/loading/LoadingComponent";
import CardComponentsV2 from "@/components/ui/CardComponentsV2";
import { Suspense } from "react";
import MenuProfile from "./components/Menu/MenuProfile";
import ToBacks from "@/components/ToBack/ToBacks";
import userStore from "@/guards/userstore";
import { IUser } from "@/components/Auth/models";
import Image from "next/image";
import userDefault from "@/assets/user-default.jpg";
import FormUserData from "./components/Form/FormUserData";
import FormChangePassword from "./components/Form/FormChangePassword";

export default function MainProfile() {
    const userData: IUser | undefined = userStore?.user

    return (
        <Suspense fallback={<LoadingComponents />}>

            <div className="flex flex-col gap-y-4 h-auto w-full lg:w-[60rem] mx-auto lg:pt-36 pt-12">
                <ToBacks />
                <CardComponentsV2 title="" childreComponents={
                    <div className="w-full h-auto">
                        <div className='flex flex-col  mx-auto border-b-2 border-gray-200 p-2'>
                            <div className='flex flex-col gap-x-2 items-center'>
                                <Image src={userDefault} alt="" width={200} height={200} className='rounded-full border-2 border-gray-200 w-32 h-32' />
                                <p className='text-xl text-black'>{userData?.user_metadata?.full_name}</p>
                                <p className='text-sm text-blue-500'>{userData?.user_metadata?.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-2 w-full">
                            <div className="w-full">
                                <FormUserData userData={userData} />
                                <div className="mt-2">
                                    <FormChangePassword />
                                </div>
                            </div>
                            <div className="w-full">
                                <MenuProfile />
                            </div>
                        </div>
                    </div>} />

            </div>


        </Suspense >
    )
}