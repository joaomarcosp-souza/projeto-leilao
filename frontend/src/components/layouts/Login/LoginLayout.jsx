import React from "react";
import { Card } from "primereact/card";
import LanguageSelectorButton from '../../Inputs/buttons/language/LanguageSelectorButton';
import style from './LoginLayout.module.css';

const LoginLayout = ({ children }) => {

    return (
        <div>
            <div className={style.buttonLanguage}>
                <LanguageSelectorButton />
            </div>
            <div className={style.card_container}>
                <Card id={style.Card} className="lg:w-30rem sm:w-25rem">
                    {children}
                </Card>
            </div>
        </div>
    )
}

export default LoginLayout;