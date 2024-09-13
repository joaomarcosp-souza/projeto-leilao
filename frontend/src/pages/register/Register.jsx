import './Register.css';
import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';
import CancelButton from '../../components/Inputs/buttons/cancelButton/CancelButton';

const Register = () => {
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
                <div className="text-900 text-3xl font-medium mb-3">Cadastra-se</div>
                <span className="subTitle">para acessar todo site.</span>
            </div>
            <div id="field-name" className="gap-2 inline-flex">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label="Nome" placeholder="Primeiro nome" required />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label="Sobrenome" placeholder="Segundo nome" required />
                </FormControl>
            </div>
            
            <div id="field-email" className="mt-3">
                <FormControl fullWidth>
                    <TextField value={inputValue} onChange={handleInputChange} id="outlined-textarea" label="E-mail" placeholder="Endereço de e-mail" required />
                </FormControl>
            </div>

            <div className="flex align-items-center justify-content-center mt-3">
                <div className="mr-2">
                    <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Cadastrar" disabled={isButtonDisabled} />
                </div>
                <CancelButton />
            </div>
        </>
    );
}

export default Register;