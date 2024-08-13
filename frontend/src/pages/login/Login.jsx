import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';



const Login = () => {

    return (
        <div class="grid justify-content-center mt-8">
            <Card title="Login" className="md:w-25rem center">
                <div class="field">
                    <label for="nome">Nome</label>
                    <InputText id="nome" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div class="field">
                    <label for="sobrenome">Sobrenome</label>
                    <InputText id="sobrenome" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div>
                    <Password feedback={false} tabIndex={1} placeholder="Senha" toggleMask/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                    <Button className="btn-login" label="Enviar" severity="secondary" text raised />
                </div>

                <div class="grid">
                    <div class="col">
                        <Button label="Cadastrar" link onClick={() => window.open('', '_blank')} />
                    </div>
                    <div class="col">
                        <Button label="Recuperar Senha" link onClick={() => window.open('', '_blank')} />
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Login;