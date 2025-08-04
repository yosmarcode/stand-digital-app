'use client'
import { Flex, Spinner } from "@radix-ui/themes"

export function LoadingComponents() {
    return (

        <Flex
            align="center"
            gap="4"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                zIndex: 9999,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Spinner size="3" />
        </Flex>

    )
}