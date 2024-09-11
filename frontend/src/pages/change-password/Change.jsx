import './Change.css';
import { React } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Password from './Inputs/Password';

const Change = () => {
    return (
        <Card className="shadow-5 border-round md:w-30rem">
            <div className="text-center mb-5">
                <img src="" alt="logo" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Alterar Senha</div>
                <span className="subTitle">para voltar a acessar sua conta.</span>
            </div>
            <div id="field-mail" className="field">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label="emailTeste@gmail.com" placeholder="Endereço de e-mail" disabled />
                    <text className="text-500 text-sm ml-2 mt-1">E-mail não pode ser alterado</text>
                </FormControl>
            </div>
            <div id="field-code" className="field">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea"
                        label="Código"
                        placeholder="O código deve possuir 4 caracteres"
                        required
                    />
                </FormControl>
            </div>

            {/* CAMPO DE SENHA/CONFIRMAR SENHA */}
            <Password />

            <div className="flex align-items-center justify-content-center mt-5">
                <div className="mr-2">
                    <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Alterar senha" />
                </div>
                <Button icon="pi pi-times" severity="secondary" onClick={() => window.location.href = '/'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
            </div>
        </Card>
    );
}

export default Change;
