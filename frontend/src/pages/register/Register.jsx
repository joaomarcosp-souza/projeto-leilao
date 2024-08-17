import './Register.css';
import React from "react";

import { Card } from 'primereact/card';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';
import { useState } from "react";

const Register = () => {

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
                <div className="text-900 text-3xl font-medium mb-3">Cadastra-se</div>
                <span className="subTitle">para acessar todo site.</span>
            </div>
            <div fullWidth id="field-name" className="field gap-2 inline-flex">
                <FormControl>
                    <TextField id="outlined-textarea" label="Nome" placeholder="Primeiro nome" required />
                </FormControl>
                <FormControl>
                    <TextField id="outlined-textarea" label="Sobrenome" placeholder="Segundo nome" required />
                </FormControl>
            </div>
            <div id="field-mail" className="field">
                <FormControl fullWidth>
                    <TextField value={inputValue} onChange={handleInputChange} id="outlined-textarea" label="E-mail" placeholder="Endereço de e-mail" required />
                </FormControl>
            </div>

            <div className="flex align-items-center justify-content-center mt-5">
                <div className="mr-2">
                    <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Cadastrar" disabled={isButtonDisabled} />
                </div>
                <Button icon="pi pi-times" severity="secondary" onClick={() => window.location.href = '/login'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
            </div>
        </Card>
    );
}

export default Register;