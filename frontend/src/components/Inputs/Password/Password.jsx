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

const Password = () => {
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
            <div id="field-password" className="card flex justify-content-center">
                <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Nova Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder="Informe uma senha forte."
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Nova Senha"
                    />
                </FormControl>
            </div>

            {isPasswordFocused && (
                <div className="criteria-box">
                    <p style={getErrorStyle(validationErrors.length)}>
                        A senha deve ter no mínimo 6 caracteres.
                    </p>
                    <p style={getErrorStyle(validationErrors.hasUpperCase)}>
                        A senha deve conter pelo menos 1 letra maiúscula.
                    </p>
                    <p style={getErrorStyle(validationErrors.hasLowerCase)}>
                        A senha deve conter pelo menos 1 letra minúscula.
                    </p>
                    <p style={getErrorStyle(validationErrors.hasNumber)}>
                        A senha deve conter pelo menos 1 número.
                    </p>
                    <p style={getErrorStyle(validationErrors.hasSpecialChar)}>
                        A senha deve conter pelo menos 1 caractere especial.
                    </p>
                </div>
            )}

            <div id="field-repeat-password" className="mt-3 mb-3">
                <FormControl required fullWidth >
                    <InputLabel htmlFor="outlined-adornment-repeat-password">Confirmar a Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-repeat-password"
                        placeholder="Repita a senha"
                        type={showRepeatPassword ? 'text' : 'password'}
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="visibilidade do campo de repetir senha"
                                    onClick={handleClickShowRepeatPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Confirmar a Senha"
                    />
                    {repeatPasswordError && <p className='repeatPasswordError'>{repeatPasswordError}</p>}
                    <FormHelperText>{'Por favor, repita sua senha.'}</FormHelperText>
                </FormControl>
            </div>
        </div>
    );
};

export default Password;
