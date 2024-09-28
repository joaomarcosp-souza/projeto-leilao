import './Change.css';
import { React } from "react";
import { Button } from 'primereact/button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Password from '../../components/Inputs/Password/Password'
import CancelButton from '../../components/Inputs/buttons/cancelButton/CancelButton';
import OTPInput from '../../components/Inputs/pin/OTP';
import { useTranslation } from 'react-i18next';

const Change = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-center mb-5">
                <img src="" alt={t('label.img.logo')} height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">{t('change-password.title')}</div>
                <span className="subTitle">{t('change-password.subtitle')}</span>
            </div>
            <div id="field-email" aria-label={t('label.aria.email-camp')} className="fields">
                <FormControl fullWidth>
                    <TextField
                        id="outlined-textarea"
                        label="emailTeste@gmail.com"
                        disabled
                        helperText={t('helper-text.email')} />
                </FormControl>
            </div>
            <div id="field-password" aria-label={t('label.aria.password-camp')}>
                <Password />
            </div>
            <div id="field-code" aria-label={t('label.aria.pin-code-camp')} className="mt-3">
                <OTPInput />
            </div>
            <div className="flex align-items-center justify-content-center mt-3">
                <div className="mr-2">
                    <Button className="buttonChange"
                        icon="pi pi-envelope" iconPos="left"
                        label={t('button.save')} aria-label={t('label.aria.buttos.save')} />
                </div>
                <CancelButton />
            </div>
        </>
    );
}

export default Change;
