import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiIp = () => {
    const [ipDetails, setIpDetails] = useState(null);

    useEffect(() => {
        const apiIp = async () => {
            try {
                const response = await axios.get("https://extreme-ip-lookup.com/json/?key=mKFXhfb8Ip6jFKdEbuYg");
                setIpDetails(response.data);
            } catch (error) {
                console.error("Nenhum dado encontrado", error);
            }
        };

        apiIp();
    }, []);

    if (!ipDetails) return <div>Carregando...</div>;

    return (
        <div>
            <h2>Informações do IP</h2>
            <p><b>IP:</b> {ipDetails.query}</p>
            <p><b>Cidade:</b> {ipDetails.city}</p>
            <p><b>Região:</b> {ipDetails.region}</p>
            <p><b>País:</b> {ipDetails.country}</p>
        </div>
    );
};

export default ApiIp;