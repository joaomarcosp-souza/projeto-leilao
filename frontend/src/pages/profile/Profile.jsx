import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { Card } from 'primereact/card';

const Profile = () => {

    return (
        <>
            <div>
                <Card className="shadow-5 border-round md:w-30rem">
                    <div fullWidth id="field-name" className="field gap-2 inline-flex">
                        <FormControl>
                            <TextField id="outlined-textarea" label="Nome" placeholder="Primeiro nome" required />
                        </FormControl>
                        <FormControl>
                            <TextField id="outlined-textarea" label="Sobrenome" placeholder="Segundo nome" required />
                        </FormControl>
                    </div>
                    <div id="field-name">
                        <FormControl fullWidth>
                            <TextField  id="outlined-textarea" label="CPF" placeholder="informe o cpf" required />
                        </FormControl>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Profile;