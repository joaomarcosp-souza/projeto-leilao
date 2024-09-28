import './Register.css';
import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';
import CancelButton from '../../components/Inputs/buttons/cancelButton/CancelButton';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsButtonDisabled(!e.target.value.includes('@'));
    }

    return (
        <>
            <div className="text-center mb-5">
                <img src="" alt={t('label.img.logo')} height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">{t('register.title')}</div>
                <span className="subTitle">{t('register.subtitle')}</span>
            </div>
            <div id="field-name" className="gap-2 inline-flex">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label={t('input.name.first-name')} placeholder={t('input.name.required')} required />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label={t('input.name.last-name')} placeholder={t('input.name.last-name-required')} required />
                </FormControl>
            </div>

            <div id="field-email" className="mt-3">
                <FormControl fullWidth>
                    <TextField value={inputValue} onChange={handleInputChange} id="outlined-textarea" label={t('input.email.field')} placeholder={t('input.email.required')} required />
                </FormControl>
            </div>

            <div className="flex align-items-center justify-content-center mt-3">
                <div className="mr-2">
                    <Button className="buttonRegister" icon="pi pi-envelope" iconPos="left" label={t('button.sign-up')} disabled={isButtonDisabled} />
                </div>
                <CancelButton />
            </div>
        </>
    );
}

export default Register;