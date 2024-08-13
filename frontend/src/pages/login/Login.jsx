import React from "react";
import "./Login.css";
import { Button } from 'primereact/button';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Login = () => {


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h2>Entrar</h2>
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


            <div class="grid inline-flex">
                <div class="inline-flex">
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Lembrar-se?" />
                    </FormGroup>
                    <Button label="recuperar senha?" link onClick={() => window.open('/recover', '_blank')} />
                </div>
            </div>

            <div class="mt-3 mb-5">
                <div class="col">
                    <Button className="btn-login" label="Conectar" severity="secondary" outlined />
                </div>
            </div>

            <Divider>
                <Chip label="Ou" size="small" />
            </Divider>

            <div class="grid inline-flex  mt-4 btn-decoration">
                <div class="inline-flex">
                    <p>Não possui uma conta? </p>
                    <Button label="Criar" link onClick={() => window.open('/register', '_blank')} />
                </div>
            </div>
        </>
    );
}

export default Login;