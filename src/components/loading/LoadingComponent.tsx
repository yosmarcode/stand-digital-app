'use client'

import { Spinner } from "react-bootstrap"

export function LoadingComponents() {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-50/15">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}