import React from 'react'

const CardComponentsV2 = ({
    title,
    childreComponents,
    childrenFooter
}: {
    title: string;
    childreComponents: React.ReactNode;
    childrenFooter?: React.ReactNode;
}) => {
    return (
        <div className="w-full h-auto flex flex-col gap-2 bg-white rounded-xl border-1 border-gray-200 p-2">

            <div className="flex flex-col gap-2 pt-4 text-center">
                <span className="font-bold text-xl text-black">{title ?? 'title'}</span>
                <span >{childreComponents}</span>
                <div className="px-6 pt-4 pb-2">
                    {childrenFooter}
                </div>

            </div>
        </div>
    )
}

export default CardComponentsV2