import React from "react";
import { Button } from 'primereact/button';
import { useTranslation } from "react-i18next";

const Logout = () => {
    const { t } = useTranslation();

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div className="col-2">
                <Button onClick={handleLogout} label={t('header.sign-out')} icon="pi pi-user" iconPos="left" outlined />
            </div>
        </>
    );
}

export default Logout;