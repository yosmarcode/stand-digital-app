'use client'
import { webApiServices } from '@/services/webApiServices'
import React from 'react'

const useIsSellersActive = ({ userId }: { userId: string }) => {
    const [isSellers, setIsSellers] = React.useState(false)
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    React.useEffect(() => {
        if (isClient && userId) {
            webApiServices
                .getValidateIfTheUserSellsByUserIdServices(userId)
                .then((res) => {
                    setIsSellers(res)
                })
                .catch((err) => {
                    console.error('Error checking if user is seller:', err)
                })
        }
    }, [isClient, userId])

    return isSellers
}

export default useIsSellersActive
