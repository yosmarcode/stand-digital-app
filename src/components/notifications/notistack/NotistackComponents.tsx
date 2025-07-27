
'use client'
import { SnackbarProvider } from "notistack"

export const NotistackComponents = ({children} : {children: React.ReactNode}) => {
    return (
        <SnackbarProvider
            maxSnack={4}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {children}
        </SnackbarProvider>
    )
}