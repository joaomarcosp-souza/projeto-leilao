import './LoginLayout.css';
import React from "react";
import { Card } from "primereact/card";
import LanguageChange from '../../Inputs/buttons/language/LanguageChange';

const LoginLayout = ({ children }) => {

    return (
        <div>
            <div className="relative">
                <LanguageChange />
            </div>
            <div className="card_container">
                <Card id="Card" className="lg:w-30rem sm:w-25rem">
                    {children}
                </Card>
            </div>
        </div>
    )
}

export default LoginLayout;