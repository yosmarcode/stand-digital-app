
"use client"
import React from 'react'
import MainProfile from '@/Sections/profile/MainProfile'
import SectionsComponents from '@/Sections/SectionsComponents'

export default function PageProfile() {
    return (
        <div className="w-full h-auto">
            <SectionsComponents
                childrenComponent={<MainProfile />}
                className=" bg-blue-50 flex flex-col mb-4 "
                id="profile" />
        </div>
    )
}

