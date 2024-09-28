import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { ROUTES } from "../../routes";
import style from './Login.module.css';
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation();
    const [checked, setChecked] = React.useState();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [user, setUser] = useState({ email: "", password: "" });
    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value })
    }

    const login = () => {
        if (user.email === "teste@gmail.com" && user.password === "123456") {
            let token = "token do backend"
            localStorage.setItem("email", user.email);
            localStorage.setItem("token", token);
            navigate(ROUTES.DASHBOARD);
        } else {
            alert('email ou senha incorretos');
        }
    }

    return (
        <>
            <div className="text-center mb-5">
                <img src="" alt={t('label.img.logo')} height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">{t('login.title')}</div>
                <span className="">{t('login.subtitle')}</span>
            </div>
            <div id="field-email" className="mb-3">
                <FormControl fullWidth>
                    <TextField onChange={handleChange} id="outlined-textarea" name="email" label="E-mail" required />
                </FormControl>
            </div>
            <div id="field-password" className="card flex justify-content-center mb-1">
                <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password" >{t('login.password')}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={t('login.password')}
                    />
                </FormControl>
            </div>
            <div className="flex align-items-center justify-content-between mb-5">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-1" />
                    <label htmlFor="rememberme">{t('login.remember-me')}</label>
                </div>
                <Link
                    className="font-medium ml-2 no-underline text-blue-500 text-right cursor-pointer"
                    to="/recover-password">{t('login.forgot-password')}</Link>
            </div>
            <div className="mb-3">
                <div className="col">
                    <Button onClick={login}
                        className={`${style.buttonLogin}`}
                        label={t('button.sign-in')} icon="pi pi-user"
                        iconPos="left" severity="secondary" outlined />
                </div>
            </div>
            <Divider>
                <Chip label={t('login.or')} size="small" />
            </Divider>
            <div className="text-center mt-3">
                <span className="text-600 font-medium line-height-3">{t('login.no-account')}
                    <Link
                        className="font-medium ml-2 no-underline text-blue-500 text-right"
                        to="/register">{t('login.register')}</Link>
                </span>
                <Button
                    className={`w-full p-button-raised p-button-warning mt-3 ${style.buttonGoogle}`}
                    label={t('button.google')}
                    icon="pi pi-google" iconPos="left" />
            </div>
        </>
    );
}

export default Login;