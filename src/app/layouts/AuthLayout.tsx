import { Outlet, NavLink } from "react-router-dom"
import {
    Typography,
    Container,
    Box, 
    Card,
    CardContent
} from "@mui/material"

import { authLayoutStyles as styles } from "./AuthLayout.styles"

export const AuthLayout = () => {
    return (
        <Box sx={styles.wrapper}>
            <Container maxWidth="xs">
                <Card elevation={6} sx={styles.card}>
                    <CardContent>
                        <Typography variant="h4" align="center" sx={styles.title}>
                            Добро Пожаловать
                        </Typography>
                        <Typography variant="body1" align="center" sx={styles.subtitle}>
                            Войдите в аккаунт или зарегистрируйтесь
                        </Typography>
                        <Outlet />
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}