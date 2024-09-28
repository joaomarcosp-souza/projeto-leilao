import './Password.css';
import { React } from "react";
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { FormHelperText } from "@mui/material";
import { useTranslation } from 'react-i18next';

const Password = () => {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [repeatPasswordError, setRepeatPasswordError] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validate = (password) => {
        const size = 6;
        const errors = {
            length: password.length >= size,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        };
        setValidationErrors(errors);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validate(newPassword);
    };

    const handleRepeatPasswordChange = (event) => {
        const newRepeatPassword = event.target.value;
        setRepeatPassword(newRepeatPassword);
        handlePasswordEqual(password, newRepeatPassword);
    };

    const handlePasswordEqual = (password, repeatPassword) => {
        if (password !== repeatPassword) {
            setRepeatPasswordError('As senhas não são iguais.');
        } else {
            setRepeatPasswordError('');
        }
    };

    const getErrorStyle = (condition) => ({
        color: condition ? 'green' : 'red',
    });

    return (
        <div className="password-container">
            {/* Campo de Senha */}
            <div id="field-password" className="card flex justify-content-center mt-3">
                <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">{t('input.password.new-password')}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder={t('input.password.required')}
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={t('input.password-visibility"')}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={t('input.password.new-password')}
                    />
                </FormControl>
            </div>

            {isPasswordFocused && (
                <div className="criteria-box">
                    <p style={getErrorStyle(validationErrors.length)}>
                        {t('helper-text.password-six-characters')}
                    </p>
                    <p style={getErrorStyle(validationErrors.hasUpperCase)}>
                        {t('helper-text.password-one-uppercase')}
                    </p>
                    <p style={getErrorStyle(validationErrors.hasLowerCase)}>
                        {t('helper-text.password-one-lowercase')}
                    </p>
                    <p style={getErrorStyle(validationErrors.hasNumber)}>
                        {t('helper-text.password-one-number')}
                    </p>
                    <p style={getErrorStyle(validationErrors.hasSpecialChar)}>
                        {t('helper-text.password-one-special-character')}
                    </p>
                </div>
            )}

            <div id="field-repeat-password" className="mt-3">
                <FormControl required fullWidth >
                    <InputLabel htmlFor="outlined-adornment-repeat-password">{t('input.password.confirm-password')}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-repeat-password"
                        placeholder={t('input.password.repeat-password')}
                        type={showRepeatPassword ? 'text' : 'password'}
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={t('input.password.repeat-password-visibility')}
                                    onClick={handleClickShowRepeatPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={t('input.password.confirm-password')}
                    />
                    {repeatPasswordError && <p className='repeatPasswordError'>{repeatPasswordError}</p>}
                    <FormHelperText>{t('helper-text.repeat-password')}</FormHelperText>
                </FormControl>
            </div>
        </div>
    );
};

export default Password;
