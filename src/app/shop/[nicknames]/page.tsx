"use client"
import MainDetailsSeller from '@/Sections/detailsSeller/MainDetailsSeller'
import SectionsComponents from '@/Sections/SectionsComponents'
import { useParams } from 'next/navigation'
import React from 'react'

const PageShop = () => {
  const params = useParams<{nicknames: string}>()


  return (
    <div className="w-full h-auto">
      
    <SectionsComponents
        childrenComponent={<MainDetailsSeller nicknames={params.nicknames} />}
        className=" bg-blue-50 flex flex-col mb-4 "
        id="details-seller" />

</div>
  )
}

export default PageShop