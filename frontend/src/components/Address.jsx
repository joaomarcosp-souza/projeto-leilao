import React, { useState } from "react";
import { TextField, Grid, IconButton, InputAdornment, Tooltip, FormControl } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import axios from "axios";

const Address = () => {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState("");

    const handleCepChange = async (event) => {
        const newCep = event.target.value;
        setCep(newCep);
        if (newCep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
                if (response.data.erro) {
                    setError("CEP não encontrado.");
                    setAddress("");
                    setNeighborhood("");
                    setCity("");
                    setState("");
                } else {
                    setAddress(response.data.logradouro);
                    setNeighborhood(response.data.bairro);
                    setCity(response.data.localidade);
                    setState(response.data.uf);
                    setError("");
                }
            } catch (err) {
                setError("Erro ao buscar o CEP.");
                setAddress("");
                setNeighborhood("");
                setCity("");
                setState("");
            }
        }
    };

    const handleUseLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = response.data.address;
                    setAddress(data.road || "");
                    setNeighborhood(data.neighbourhood || data.suburb || "");
                    setCity(data.city || data.town || data.village || "");
                    setState(data.state || "");
                    setCep(data.postcode || "");
                    setError("");
                } catch (err) {
                    setError("Erro ao buscar o endereço pela localização.");
                }
            }, (error) => {
                setError("Erro ao obter a localização.");
            });
        } else {
            setError("Geolocalização não é suportada pelo seu navegador.");
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControl fullWidth error={!!error}>
                    <TextField
                        label="CEP"
                        value={cep}
                        onChange={handleCepChange}
                        helperText={error || "Informe seu CEP ou Use a Localização."}
                        fullWidth
                        required
                        FormHelperTextProps={{ style: { color: error ? 'red' : 'grey' } }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Tooltip title="Usar Localização" placement="right-start" arrow>
                                        <IconButton onClick={handleUseLocation} aria-label="usar localização">
                                            <LocationOn />
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Endereço"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Bairro"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Estado"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    fullWidth
                    disabled
                />
            </Grid>
        </Grid>
    );
};

export default Address;