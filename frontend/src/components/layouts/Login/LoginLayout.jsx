import React from "react";
import './LoginLayout.css';

const LoginLayout = ({ children }) => {

    return (
        <>
            <div className="body flex">
                <div className="mt-1 mb-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default LoginLayout;