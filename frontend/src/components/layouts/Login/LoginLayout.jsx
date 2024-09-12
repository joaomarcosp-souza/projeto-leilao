import React from "react";
import './LoginLayout.css';
import { Card } from "primereact/card";

const LoginLayout = ({ children }) => {

    return (

        <div className="flex align-content-center justify-content-center center">
            <Card id="Card" className="shadow-5 border-round lg:w-30rem sm:w-25rem">
                {children}
            </Card>
        </div>

    )
}

export default LoginLayout;