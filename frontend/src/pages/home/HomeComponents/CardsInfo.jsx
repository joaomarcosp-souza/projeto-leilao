import React from "react";
import { Box, createTheme, ThemeProvider, IconButton, Grid, Paper, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useTranslation } from "react-i18next";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 960,
            lg: 1280,
            xl: 1600,
        },
    },
});

const CardInfo = () => {
    const { t } = useTranslation();

    const data = [
        {
            title: t('auction.active'),
            value: "10",
            qtde: t('auction.text-card.new-auction-today'),
            descri: t('auction.text-card.open-today'),
            icon: <GavelIcon sx={{ color: 'blue' }} />,
            bgColor: 'rgba(33, 150, 243, 0.1)',
        },
        {
            title: t('auction.last-sales'),
            value: "35",
            qtde: "5",
            descri: t('auction.text-card.closed-today'),
            icon: <ShoppingCartIcon sx={{ color: 'green' }} />,
            bgColor: 'rgba(76, 175, 80, 0.1)',

        },
        {
            title: t('auction.new-users'),
            value: "1,200",
            qtde: "10 ",
            descri: t('auction.text-card.new-users-today'),
            icon: <PeopleIcon sx={{ color: 'orange' }} />,
            bgColor: 'rgba(255, 152, 0, 0.1)',
        },
        {
            title: t('auction.total-sales'),
            value: "R$ 15.500",
            qtde: "R$ 2.000 ",
            descri: t('auction.text-card.sales-today'),
            icon: <AttachMoneyIcon sx={{ color: 'black' }} />,
            bgColor: 'rgba(0, 0, 0, 0.1)',
        }
    ];

    return (
        <>
            <div className="p-3">
                <ThemeProvider theme={theme}>
                    <Grid container spacing={3}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Paper elevation={2} sx={{ padding: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}>
                                    <Box display="flex" justifyContent="space-between" mb={2}>
                                        <Box>
                                            <Typography variant="body2" sx={{ fontSize: 20 }} color="text.secondary" mb={1}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="h5" color="text.primary">
                                                {item.value}
                                            </Typography>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{
                                                backgroundColor: item.bgColor,
                                                width: '1.5rem',
                                                height: '1.5rem',
                                                borderRadius: '50%',
                                            }}
                                        >
                                            <IconButton>
                                                {item.icon}
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Typography variant="body" color={"green"}>
                                        {item.qtde}
                                    </Typography>
                                    <Typography variant="body">
                                        {item.descri}
                                    </Typography>

                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </ThemeProvider>
            </div >
        </>
    );
};

export default CardInfo;
