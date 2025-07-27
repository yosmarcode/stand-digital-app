import { Button } from '@headlessui/react'

const ButtonComponent = ({ title, variant, handClick }: { title: string, variant?: string, handClick?: () => void }) => {

    let variantButton = ' bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
    if (variant === 'primary' || variant === 'default') {
        variantButton = ' bg-primary text-white p-2 hover:bg-primary-600'
    } else if (variant === 'danger') {
        variantButton = ' bg-red-500 text-white p-2 hover:bg-red-600'
    } else if (variant === 'warning') {
        variantButton = ' bg-yellow-500 text-white p-2 hover:bg-yellow-600'
    } else if (variant === 'info') {
        variantButton = ' bg-blue-500 text-white p-2 hover:bg-blue-600'
    } else if (variant === 'success') {
        variantButton = ' bg-green-500 text-white p-2 hover:bg-green-600'
    } else if (variant === 'outline') {
        variantButton = ' bg-transparent text-blue-500 p-2 hover:bg-blue-500 hover:text-white'
    }


    return (
        <div>
            <Button className={`${variantButton} rounded-2 hover:scale-105 transition-all duration-300`} onClick={handClick}>
                {title}
            </Button>
        </div>
    )
}

export default ButtonComponent