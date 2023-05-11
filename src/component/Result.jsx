import React from 'react'
import Menu from './Menu';
import '../css/App.css';

function Result() {
    return (
        <>
            <Menu />
            <div className="rounded overflow-hidden shadow-lg mt-4 max-w-screen-lg mx-auto">
                <div className="p-6 text-white bg-result">
                    <div className="text-center mb-2">
                        <p className="font-bold text-2xl">
                            Examination Result
                        </p>
                    </div>
                    <hr />
                    <div className="text-center px-4 pt-4">
                        <div className="text-8xl font-light">66</div>
                        <p className="mt-3 font-semibold">Score</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <div className="p-6 ">
                            <p className="font-semibold">Time: <span className="font-normal">1H</span></p>
                            <p className="font-semibold">User Name: <span className="font-normal">Admin</span></p>
                            <p className="font-semibold">Examination Type: <span className="font-normal">Annual Job Test</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result