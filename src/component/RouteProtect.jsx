import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

function RouteProtect({children}) {
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem("access_token");

        if (!userToken) {
            navigate("/login");
        } 
    }, []);

    return children;
}

export default RouteProtect