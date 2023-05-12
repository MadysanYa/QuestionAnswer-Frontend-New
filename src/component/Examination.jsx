import React from 'react'
import Menu from './Menu';
import ExamLogo from '../image/exam.png';

function Examination() {
    return (
        <>
            <Menu />
            <div className="max-w-screen-lg mx-auto">
                <div class="grid grid-cols-4 gap-4">
                    <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white">
                        <div className="text-center">
                            <div className="">
                                <img className="fill-current m-auto" width="60" src={ExamLogo} alt="" />
                            </div>
                            <div className="mt-4">
                                <p className="text-lg">ANNUAL JOB TEST 2023</p>
                                <p className="text-gray-400">06 June 2023 | 01:30 Hour</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Examination