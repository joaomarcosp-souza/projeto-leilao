import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div class="grid justify-content-center mt-8">
            <Card title="Login" className="md:w-25rem title-login">
                <div class="field">
                    <FormControl fullWidth variant="standard">
                        <TextField fullWidth id="standard-search" label="E-mail" type="e-mail" variant="standard" />
                    </FormControl>
                </div>
                <div class="field">
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div class="mt-3">
                    <div class="col ">
                        <Button className="btn-login" label="Enviar" severity="secondary" outlined />
                    </div>
                </div>

                <div class="grid inline-flex mt-4">
                    <div>
                        <Button label="Cadastrar" link onClick={() => window.open('', '_blank')} />
                    </div>
                    <div>
                        <Button label="recuperar senha?" link onClick={() => window.open('', '_blank')} />
                    </div>
                </div>
            </Card>
        </div>
    );
}