import React, { useState } from "react";
import { Card, CardContent, CardHeader, Avatar, CardMedia, IconButton, TextField, FormControl, Button } from "@mui/material";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import Address from "../../../components/Address";

// Função para validar CPF (corrigida)
const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    let sum = 0;
    let remainder;

    // Cálculo para verificar o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    // Cálculo para verificar o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
};

const EditProfile = () => {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpfError] = useState('');

    // Função para lidar com a mudança de CPF
    const handleCpfChange = (event) => {
        const newCpf = event.target.value;

        // Remove caracteres da máscara e valida somente os números
        const cpfWithoutMask = newCpf.replace(/[^\d]+/g, '');
        setCpf(newCpf);

        // Valida CPF apenas quando ele tiver 11 dígitos
        if (cpfWithoutMask.length === 11) {
            if (validateCPF(cpfWithoutMask)) {
                setCpfError('');  // CPF válido
            } else {
                setCpfError('CPF inválido.');  // CPF inválido
            }
        } else {
            setCpfError('');  // Não mostra erro enquanto está incompleto
        }
    };


    return (
        <div className='flex justify-content-center align-items-center mt-2'>
            <Card className="shadow-5 border-round md:w-30rem">
                <CardContent>
                    <CardHeader
                        avatar={
                            <Avatar>
                                <CardMedia
                                    component="img"
                                    image="https://cdn.discordapp.com/attachments/1052587003532812360/1279156247446421525/image.png?ex=66f508d6&is=66f3b756&hm=ff2089c88a3be606a0c18a52c5958d03e19df8a0b3aa31d603e6c9791d68d497&"
                                    alt="Foto de perfil"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Avatar>
                        }
                        action={
                            <IconButton onClick={() => navigate(ROUTES.PROFILE)} aria-label="Editar Perfil">
                                Voltar Perfil
                            </IconButton>
                        }
                        title="Perfil"
                        subheader="Edite suas informações"
                    />
                    <div id="field-name" className="gap-2 inline-flex mb-3">
                        <FormControl fullWidth>
                            <TextField id="outlined-textarea" label="Nome" placeholder="Primeiro nome" required />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField id="outlined-textarea" label="Sobrenome" placeholder="Segundo nome" required />
                        </FormControl>
                    </div>
                    <div id="field-cpf" className="mb-3">
                        <FormControl fullWidth error={!!cpfError}>
                            <InputMask
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={handleCpfChange}
                            >
                                {() => (
                                    <TextField
                                        id="outlined-cpf"
                                        label="CPF"
                                        placeholder="Digite seu CPF"
                                        required
                                        helperText={cpfError}
                                        FormHelperTextProps={{ style: { color: 'red' } }}
                                    />
                                )}
                            </InputMask>
                        </FormControl>
                    </div>
                    <div id="field-address" className="mt-3">
                        <Address />
                    </div>
                    <div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button variant="outlined" color="primary">
                            Salvar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditProfile;
