import './LoginLayout.css';
import React from "react";
import { Card } from "primereact/card";

const LoginLayout = ({ children }) => {

    return (
        <div className="card_container">
            <Card id="Card" className="lg:w-30rem sm:w-25rem">
                {children}
            </Card>
        </div>
    )
}

export default LoginLayout;