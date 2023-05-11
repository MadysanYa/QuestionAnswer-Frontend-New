import React from 'react'

function LoginForm() {
    const myStyle = {
        backgroundColor: '#0b1966'
    };

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="p-6 h-80 bg-white rounded shadow-xl w-96 align-middle">
                <form action="">
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Email:</label>
                        <input type="text" name="email" id="email" placeholder="example@email.com" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Password:</label>
                        <input type="password" name="password" id="password" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <button className="cursor-pointer py-2 px-4 block mt-6 text-white font-bold w-full text-center rounded" style={myStyle}>Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500 font-semibold leading-6">
                    <span className="text-red-600">NOTE: </span>Email & Password are the HR System.
                </p>
            </div>
        </div>
    );
}

export default LoginForm