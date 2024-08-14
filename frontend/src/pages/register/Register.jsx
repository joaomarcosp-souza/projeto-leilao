import './Register.css';
import React from "react";

import { Card } from 'primereact/card';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


const Register = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex align-items-center justify-content-center mt-5">
            <Card className="shadow-5 border-round md:w-30rem">
                <div className="text-center mb-5">
                    <img src="" alt="logo" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Cadastra-se</div>
                    <span className="subTitle">para usufruir de todas funcionalidades.</span>
                </div>
                <div id="field-name" className="field">
                    <FormControl fullWidth>
                        <TextField id="outlined-textarea" label="Nome" placeholder="Informe o seu nome completo." />
                    </FormControl>
                </div>
                <div id="field-name" className="field">
                    <FormControl fullWidth>
                        <TextField id="outlined-textarea" label="E-mail" placeholder="Endereço de e-mail" />
                    </FormControl>
                </div>
                <div id="field-password" className="field">
                    <FormControl fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password" >Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            placeholder="Senha deve ter no mínimo 6 caracteres"
                            type={showPassword ? 'text' : 'password'}
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
                            label="Senha"
                        />
                    </FormControl>
                </div>
            </Card>
        </div>
    );
}

export default Register;