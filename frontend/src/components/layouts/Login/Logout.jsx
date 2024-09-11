import React from "react";
import { Button } from 'primereact/button';

const Logout = () => {

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div className="col-2">
                <Button onClick={handleLogout} label="Deslogar" icon="pi pi-user" iconPos="left" outlined />
            </div>
        </>
    );
}

export default Logout;