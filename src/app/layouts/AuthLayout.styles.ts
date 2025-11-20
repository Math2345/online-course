import { SxProps, Theme } from "@mui/material";
import { title } from "process";

export const authLayoutStyles: Record<string, SxProps<Theme>> = {
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #42b883, #2c3e50)",
        p: 2
    },

    card: {
        borderRadius: 3,
        p: 3
    },

    title : {
        fontWeight: 700,
    },

    subtitle: {
        mb: 3,
        color: "text.secondary"
    }
}