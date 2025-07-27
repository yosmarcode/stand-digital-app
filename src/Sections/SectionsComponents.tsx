import React from 'react'

interface SectionsComponentsProps {
    childrenComponent: React.ReactNode,
    className?: string,
    id?: string
}

const SectionsComponents = ({ childrenComponent, className, id }: SectionsComponentsProps) => {
    return (
        <section className={`w-full ${className}`} id={id}>
            {childrenComponent}
        </section>
    )
}

export default SectionsComponents