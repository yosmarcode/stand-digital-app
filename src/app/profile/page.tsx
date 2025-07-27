
"use client"
import React from 'react'
import MainProfile from '@/Sections/profile/MainProfile'
import SectionsComponents from '@/Sections/SectionsComponents'

export default function PageProfile() {
    return (
        <div className="w-full h-screen">

            <SectionsComponents
                childrenComponent={<MainProfile />}
                className=" bg-blue-50 h-screen flex flex-col "
                id="profile" />
        </div>
    )
}

