import "./Recover.css";
import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from 'primereact/button';
import CancelButton from "../../components/Inputs/buttons/cancelButton/CancelButton";
import { useTranslation } from "react-i18next";

const Recover = () => {
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
                < div className="text-900 text-3xl font-medium mb-3" > {t('recover.title')}</div>
                <span className="subTitle">{t('recover.subtitle')}</span>
            </div >
            <div id="field-email">
                <FormControl fullWidth>
                    <TextField id="outlined-textarea" label={t('input.email.field')}
                        placeholder={t('input.email.required')} multiline
                        value={inputValue} onChange={handleInputChange} required
                    />
                </FormControl>
            </div>
            <div className="flex align-items-center justify-content-center mt-3">
                <div className="mr-2">
                    <Button className="buttonRecover" icon="pi pi-envelope" iconPos="left" label={t('button.send-email')} disabled={isButtonDisabled} />
                </div>
                <CancelButton />
            </div>
        </>
    );
}

export default Recover;