import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

export const useNavigationHandlers = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(ROUTES.LOGIN);
    };

    const handleRegister = () => {
        navigate(ROUTES.REGISTER);
    };

    const handlePasswordRecovery = () => {
        navigate(ROUTES.PASSWORD_RECOVERY);
    };

    const handlePasswordChange = () => {
        navigate(ROUTES.CHANGE_PASSWORD);
    };

    return {
        handleLogin,
        handleRegister,
        handlePasswordRecovery,
        handlePasswordChange,
    };
};