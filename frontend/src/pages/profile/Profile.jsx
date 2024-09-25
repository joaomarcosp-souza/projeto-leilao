import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { CardMedia } from "@mui/material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import style from './Profile.css';
import { ROUTES } from "../../routes";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-Container">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={style.card}>
                        <CardHeader
                            avatar={
                                <Avatar className={style.avatar}>
                                    <CardMedia
                                        component="img"
                                        image="https://cdn.discordapp.com/attachments/1052587003532812360/1279156247446421525/image.png?ex=66f508d6&is=66f3b756&hm=ff2089c88a3be606a0c18a52c5958d03e19df8a0b3aa31d603e6c9791d68d497&"
                                        alt="Foto de perfil"
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton onClick={() => navigate(ROUTES.EDIT_PROFILE)} aria-label="Editar Perfil">
                                    Editar Perfil
                                </IconButton>
                            }
                            title={<Typography variant="h5">Nome Perfil</Typography>}
                            subheader="E-MAIL DO USUÁRIO"
                            className={style.cardHeader}
                        />
                        <CardContent className={style.cardContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Documento:</Typography>
                                    Documentos do usuario
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Telefone:</Typography>
                                    Telefone do Usuario
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Endereço:</Typography>
                                    <Typography variant="body2">CEP: 87711-230</Typography>
                                    <Typography variant="body2">Rua: Rua São Jorge</Typography>
                                    <Typography variant="body2">Número: 89</Typography>
                                    <Typography variant="body2">Complemento: Casa Branca</Typography>
                                    <Typography variant="body2">Bairro: São Jose</Typography>
                                    <Typography variant="body2">Cidade: Paranavai</Typography>
                                    <Typography variant="body2">Estado: Parana</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
};

export default Profile;
