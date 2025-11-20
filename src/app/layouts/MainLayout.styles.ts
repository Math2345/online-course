import { SxProps, Theme } from '@mui/material'

export const mainLayoutStyles: Record<string, SxProps<Theme>> = {
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    },

    header: {
        display: "flex",
        justifyContent: "space-between"
    },

    nav: {
        display: "flex",
        gap: 3
    },

    main: {
        flex: 1, 
        py: 4
    },

    footer: {
        textAlign: "center",
        py: 3,
        mt: 4,
        bgcolor: "#f5f5f5"
    }
}