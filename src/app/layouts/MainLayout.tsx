import { Outlet, NavLink } from "react-router-dom"
import {
    AppBar, 
    Toolbar, 
    Typography,
    Container,
    Box, 
    Button
} from "@mui/material"

import { mainLayoutStyles as styles} from "./MainLayout.styles"

export const MainLayout = () => {
    return (
        <Box sx={styles.wrapper}>
            <AppBar position="sticky" color="default" elevation={2}>
                <Toolbar sx={styles.header}>
                    <Typography variant="h6" sx={{ fontWeight: 700}}>
                        OnlineCourse
                    </Typography>
                    <Box sx={styles.nav}>
                        <Button component={NavLink} to="/" color="inherit">Главная</Button>
                        <Button component={NavLink} to="/courses" color="inherit">Курсы</Button>
                        <Button component={NavLink} to="/profile" color="inherit">Профиль</Button>
                    </Box>
                        <Button component={NavLink} to="/login" color="inherit">Войти</Button>
                </Toolbar>
                <Container sx={styles.main}>
                    <Outlet />
                </Container>
                <Box component="footer" sx={styles.footer}>
                    <Typography variant="body2" color="text.secondary">
                        @ 2025 OnlineCourse
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    )
}