import "./Recover.css";
import React from "react";
import { useState } from "react";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';
import CancelButton from "../../components/Inputs/buttons/cancelButton/CancelButton";

const Recover = () => {

    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsButtonDisabled(!e.target.value.includes('@'));
    }

    return (
        <>
            <div className="text-center mb-5">
                <img src="" alt="logo" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Recuperar Senha</div>
                <span className="subTitle">Um e-mail de recuperação sera enviado para você</span>
            </div>
            <div id="field-email">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label="E-mail"
                        placeholder="Endereço de e-mail cadastrado no sistema" multiline
                        value={inputValue} onChange={handleInputChange} required
                    />
                </FormControl>
            </div>
            <div className="flex align-items-center justify-content-center mt-3">
                <div className="mr-2">
                    <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Enviar e-mail" disabled={isButtonDisabled} />
                </div>
                <CancelButton />
            </div>
        </>
    );
}

export default Recover;