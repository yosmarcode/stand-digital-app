import MainAuth from '@/components/Auth/MainAuth'
import SectionsComponents from '@/Sections/SectionsComponents'
import React from 'react'

const page = () => {
    return (
        <div className="w-full h-screen">

            <SectionsComponents
                childrenComponent={<MainAuth />}
                className=" bg-blue-50 h-full flex flex-col "
                id="auth" />
        </div>
    )
}

export default page