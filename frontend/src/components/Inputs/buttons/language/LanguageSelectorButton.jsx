import './LanguageSelectorButton.css';
import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { FlagIcon } from "react-flag-kit";
import { useTranslation } from "react-i18next";
import i18n from '../../../../config/i18n';


const LanguageChange = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = language => {
        i18n.changeLanguage(language);
    }

    const handleMenuItemClick = language => {
        handleLanguageChange(language);
        handleClose();
    }


    return (
        <div className="relative">
            <Tooltip title={t('button.language-config')} arrow>
                <IconButton aria-label="settings"
                    className='buttonConfig'
                    onClick={handleClick}>
                    <i className="pi pi-cog"></i>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuItemClick('en')}>
                    <FlagIcon

                        code="US" size={24} />
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('pt-BR')}>
                    <FlagIcon
                        code="BR" size={24} />
                </MenuItem>
            </Menu>
        </div >
    );
}

export default LanguageChange;