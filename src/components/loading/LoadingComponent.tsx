'use client'

import { Flex, Spinner } from "@radix-ui/themes"

export function LoadingComponents() {
    return (
        <Flex align="center" gap="4">
            <Spinner size="3" />
        </Flex>
    )
}