import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiIp = () => {
    const [ipInfo, setIpInfo] = useState(null);

    useEffect(() => {
        const apiIp = async () => {
            try {
                const response = await axios.get("https://extreme-ip-lookup.com/json/?key=mKFXhfb8Ip6jFKdEbuYg");
                setIpInfo(response.data);
            } catch (error) {
                console.error("Nenhum dado encontrado", error);
            }
        };

        apiIp();
    }, []);

    if (!ipInfo) return <div>Carregando...</div>;

    return (
        <div>
            <h2>Informações do IP</h2>
            <p><strong>IP:</strong> {ipInfo.query}</p>
            <p><strong>Cidade:</strong> {ipInfo.city}</p>
            <p><strong>Região:</strong> {ipInfo.region}</p>
            <p><strong>País:</strong> {ipInfo.country}</p>
        </div>
    );
};

export default ApiIp;