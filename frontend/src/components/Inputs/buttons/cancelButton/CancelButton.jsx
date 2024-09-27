import './CancelButton.css';
import { Tooltip } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigationHandlers } from "../../../HandleRoutes";
import { useTranslation } from "react-i18next";

const CancelButton = () => {
    const { t } = useTranslation();
    const { handleLogin } = useNavigationHandlers();

    return (
        <Tooltip title={t('tooltip.cancel')} placement="right" arrow>
            <Button className="buttonCancel" icon="pi pi-times" onClick={handleLogin} />
        </Tooltip>
    );
}

export default CancelButton;