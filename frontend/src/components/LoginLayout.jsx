import React from "react";
import { Card } from 'primereact/card';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const LoginLayout = ({ children }) => {

    return (
        <>
            <div class="grid justify-content-center mt-8">
                <Card className="md:w-25rem title-login">                    
                    {children}
                </Card>
            </div>
        </>
    )
}

export default LoginLayout;