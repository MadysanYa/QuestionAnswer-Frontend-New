import React, { useState, useEffect } from 'react'
import { base_url } from "../BaseUrl";
import axios from 'axios'
import Menu from './Menu';
import ExamLogo from '../image/exam.png';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function Examination() {
    const [data, setData] = useState([]);
    // const queryParams = { test_id: 'bar', user_id: 'qux' };
    // const queryString = new URLSearchParams(queryParams).toString();

    useEffect(() => {
        async function allExamination() {
            await axios.get(base_url + "test")
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        allExamination();
    }, []);

    return (
        <>
            <Menu />
            <div className="mt-4 ">
                <div className="max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        {data.length >= 1 ? (
                            data.map((exam, index) => (
                                <Link to={`/page/question?test_id=${exam.id}`} key={exam.id}>
                                    <div className="rounded overflow-hidden shadow-lg p-6 bg-white">
                                        <div className="text-center">
                                            <div className="">
                                                <img className="fill-current m-auto" width="60" src={ExamLogo} alt="" />
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-base uppercase">{exam.name}</p>
                                                <p className="text-gray-400">{exam.date}</p>
                                                <p className="text-gray-400 capitalize ">{exam.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white">
                                <Loading />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Examination