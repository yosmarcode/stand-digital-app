import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalComponents = ({ title, isOpen, size, setIsOpen, chiledrenBody, chiledrenFooter }: { title?: string, isOpen: boolean, size?: "sm" | "lg" | "xl", setIsOpen: (value: boolean) => void, chiledrenBody: React.ReactNode, chiledrenFooter?: React.ReactNode }) => {
    return (
        <div>
            <Modal
                show={isOpen}
                onHide={() => setIsOpen(false)}
                size={size || "lg"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            // fullscreen={isFullScreen || false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {chiledrenBody}
                </Modal.Body>
                <Modal.Footer>
                    {chiledrenFooter}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComponents