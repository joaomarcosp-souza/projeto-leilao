import { Tooltip } from "@mui/material";
import { Button } from "primereact/button";

import './CancelButton.css';
import { useNavigationHandlers } from "../../../HandleRoutes";

const CancelButton = () => {

    const {handleLogin} = useNavigationHandlers();

    return (
        <Tooltip title="Cancelar" placement="right" arrow>
            <Button className="buttonCancel" icon="pi pi-times" onClick={handleLogin} />
        </Tooltip>
    );
}

export default CancelButton;