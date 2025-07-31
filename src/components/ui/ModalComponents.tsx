import { Button, Dialog, Flex, Spinner } from '@radix-ui/themes'
import React from 'react'

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
                    <Dialog.Description>
                        {chiledrenBody}
                    </Dialog.Description>



                    <Flex gap="3" justify="end" className='pt-2'>
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