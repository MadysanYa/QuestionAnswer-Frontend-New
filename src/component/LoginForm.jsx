import React, { useState, useEffect } from 'react'
import { base_url } from "../BaseUrl";
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
import '../css/App.css';

function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(base_url + "login", {
            "username": username,
            "password": password

        }).then((response) => {
            navigate("/examination");
            const userJson = JSON.stringify(response.data.user);

            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("user_info", userJson);
            
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="p-6 h-80 bg-white rounded shadow-xl w-96 align-middle">
                <form onClick={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Username:</label>
                        <input 
                            type="text" 
                            name="user-name" 
                            id="user-name" 
                            placeholder="Username" 
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            required
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="password" 
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 text-white font-bold w-full text-center rounded bg-shinhan">Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500 font-semibold leading-6">
                    <span className="text-red-600">NOTE: </span>Email & Password are the HR System.
                </p>
            </div>
        </div>
    );
}

export default LoginForm