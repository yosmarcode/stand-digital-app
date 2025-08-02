'use client'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import React, { Suspense } from 'react'
import { LoadingComponents } from '../loading/LoadingComponent'

const ModalComponents = ({ titleModal, titleButton, chiledrenBody }: { titleModal?: string, titleButton?: string, chiledrenBody: React.ReactNode }) => {
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant="outline">{titleButton}</Button>
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






                    <Flex gap="3" justify="end" className='pt-4 border-t border-gray-200'>
                        <Dialog.Close>
                            <Button
                                type="submit"
                                size="3"
                                variant="outline">
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