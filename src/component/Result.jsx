import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { base_url } from '../BaseUrl';
import Menu from './Menu';
import '../css/App.css';
import Loading from './Loading';
import PageNotFound from './PageNotFound';

function Result() {
    const [data, setData] = useState();
    const [status, setStatus] = useState(200);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const testId = params.get('test_id');
        const userInfo = localStorage.getItem("user_info");
        const userJson =  JSON.parse(userInfo);

        axios.get(base_url + "result/user", { params: { test_id: testId, user_id: userJson.id } })
            .then(response => {
                setData(response.data.data);

            })
            .catch(error => {
                console.error(error);
                setStatus(error.response.status);
            });
    }, []);

    return (
        <>
            <Menu />
            {status === 404 ? (
                <PageNotFound />
            ) : (
                data ? (
                    <div className="rounded overflow-hidden shadow-lg mt-4 max-w-screen-lg mx-auto">
                        <div className="p-6 text-white bg-result">
                            <div className="text-center mb-2">
                                <p className="font-bold text-2xl">
                                    Examination Result
                                </p>
                            </div>
                            <hr />
                            <div className="text-center px-4 pt-4">
                                <div className="text-8xl font-light">{data.score}</div>
                                <p className="mt-3 font-semibold">Score</p>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <div className="p-6 ">
                                    <p className="font-semibold">Time: <span className="font-normal">{data.time_taken}</span></p>
                                    <p className="font-semibold">User Name: <span className="font-normal">{data.user_id}</span></p>
                                    <p className="font-semibold">Examination Type: <span className="font-normal">{data.test_id}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                        <Loading />
                    </div>
                )
            )}

        </>
    )
}

export default Result