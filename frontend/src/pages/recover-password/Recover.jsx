import "./Recover.css";
import React from "react";
import { useState } from "react";

import { Card } from 'primereact/card';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';

const Recover = () => {

    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsButtonDisabled(!e.target.value.includes('@'));
    }

    return (
        <Card className="shadow-5 border-round md:w-30rem">
            <div className="text-center mb-5">
                <img src="" alt="logo" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Recuperar Senha</div>
                <span className="subTitle">Um e-mail sera enviado para você</span>
            </div>
            <div className="field">
                <FormControl fullWidth variant="standard">
                    <TextField id="outlined-textarea" label="E-mail"
                        placeholder="Endereço de e-mail ou nome de usuário" multiline
                        value={inputValue} onChange={handleInputChange} required
                    />
                </FormControl>
            </div>
            <div className="flex align-items-center justify-content-center mt-5">
                <div className="mr-2">
                    <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Enviar e-mail de recuperação" disabled={isButtonDisabled} />
                </div>
                <Button icon="pi pi-times" severity="secondary" onClick={() => window.location.href = '/login'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
            </div>
        </Card>
    );
}

export default Recover;