import React, { useState, useEffect } from 'react'
import { base_url } from "../BaseUrl";
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
import '../css/App.css';

function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error403, setError403] = useState(false);
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const navigate = useNavigate();
    const inputClass = "w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none";

    const handleSubmit = async (event) => {
        event.preventDefault();

        setErrorUsername(username ? false : true);
        setErrorPassword(password ? false : true);
        
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
            setError403((error.response.status === 401) ?? false);
        });
    }

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="p-6 h-80 bg-white rounded shadow-xl w-96 align-middle high-auto">
                <form>
                    { error403 ? <p className="text-red-600">These credentials do not match our records.</p> : ''}
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Username:</label>
                        <input 
                            type="text" 
                            name="user-name" 
                            id="user-name" 
                            placeholder="Username" 
                            className={errorUsername ? inputClass + " invalid:border-red-600" : inputClass}
                            required
                            onChange={e => setUserName(e.target.value)}
                        />
                        { errorUsername ? <p className="text-red-600 mt-1">The username field is required.</p> : ''}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            className={errorPassword ? inputClass + " invalid:border-red-600" : inputClass}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                        {errorPassword ? <p className="text-red-600 mt-1">The password field is required.</p> : ''}
                    </div>
                    <button type="submit" onClick={handleSubmit} className="cursor-pointer py-2 px-4 block mt-6 text-white font-bold w-full text-center rounded bg-shinhan">Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500 font-semibold leading-6">
                    <span className="text-red-600">NOTE: </span>Username & Password are the same as with HR System.
                </p>
            </div>
        </div>
    );
}

export default LoginForm