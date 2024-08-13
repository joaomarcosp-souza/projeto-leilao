import React from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';

const Recover = () => {

    return (
        <>
            <h2>Recuperar Senha</h2>
            <p>Informe o seu e-mail para recuperar a senha</p>
            <div class="field">
                <FormControl fullWidth variant="standard">
                    <TextField fullWidth id="standard-search" label="E-mail" type="e-mail" variant="standard" />
                </FormControl>
            </div>

            <div class="mt-3 mb-5 inline-flex">
                <div class="col">
                    <Button label="Enviar" severity="success" />
                </div>
                <div class="col">
                    <Button label="Cancelar" severity="secondary" />
                </div>
            </div>
        </>
    );

}

export default Recover;