import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
        <>
            <Box
                key='src'
                width='100%'
                display='flex'
                justifyContent='center'
                overflow= 'hidden'
                // cursor='crosshair'
                bg='#3b413c'
            >
                <main>{children}</main>
            </Box>
        </>
    )
}