'use client'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import React, { Suspense } from 'react'
import { LoadingComponents } from '../loading/LoadingComponent'

const ModalComponents = ({ titleModal, titleButton, chiledrenBody,  buttonVariant}: { titleModal?: string, titleButton?: string, chiledrenBody: React.ReactNode, buttonVariant?: 'outline' | 'solid' | 'ghost' | 'classic' | 'soft' | 'surface' }) => {
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant={buttonVariant || 'outline'} size="2" className='w-full cursor-pointer'>{titleButton}</Button>
                </Dialog.Trigger>
                <Dialog.Content className='w-[40rem]'>
                    <Dialog.Title>
                        {titleModal}
                    </Dialog.Title>
                    <Dialog.Description />
                    <div>
                        <Suspense fallback={<LoadingComponents />}>
                            {chiledrenBody}
                        </Suspense>
                    </div>

                    <Flex gap="3" justify="end"  pt="4" >
                        <Dialog.Close >
                            <Button
                                type="submit"
                                size="3"
                                variant="ghost">
                                Cerrar
                            </Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

        </div>
    )
}

export default ModalComponents