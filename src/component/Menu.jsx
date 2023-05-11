import React from 'react'
import '../css/App.css';
import ShinhanLogo from '../image/shinhan-logo-white.svg';

function Menu() {
    return (
        <div className="sticky top-0 bg-shinhan">
            <div className="flex items-center justify-between flex-wrap py-6  max-w-screen-lg mx-auto">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="fill-current mr-2" width="40" src={ShinhanLogo} alt="" />
                    <span className="font-semibold text-xl tracking-tight">Shinhan Bank</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                            1:30 H
                        </a> */}
                    </div>
                    <div>
                        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu