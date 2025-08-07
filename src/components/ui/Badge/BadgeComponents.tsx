'use client'
import React from 'react'
const BadgeComponents = ({category, handClick, className}: {category: {id: number, description: string}, handClick?: () => void, className?: string}) => {
    return (

        <div className={`${className}`}>
            <span 
            onClick={handClick}
            className="text-xs text-blue-500 hover:text-blue-600 hover:cursor-pointer rounded-md p-1 border-1 border-blue-500 hover:border-blue-600 transition-all duration-300">{category.description}</span>
        </div>

    )
}

export default BadgeComponents