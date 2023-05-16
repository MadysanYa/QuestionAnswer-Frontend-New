import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { base_url } from '../BaseUrl';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ExaminationRule() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(200);
    const [timeLeft, setTimeLeft] = useState();
    const [isResult, setIsResult] = useState(false);

    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const testId = params.get('test_id');
    const userInfo = localStorage.getItem("user_info");
    const userJson = JSON.parse(userInfo);

    // BLOCK USER WHO HAS RESULT
    async function resultIsRead() {
        await axios.get(base_url + "result/check", { params: { test_id: testId, user_id: userJson.id } })
            .then(response => {
                if (response.data.data) {
                    setIsResult(true);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    // GET ALL QUESTION AND ANSWER
    async function allQuestionAnswer() {
        await axios.get(base_url + "question", { params: { test_id: testId, user_id: userJson.id } })
            .then(response => {
                console.log(response.data.data);
            })
            .catch(error => {
                console.error(error);
                setStatus(error.response.status);
            });
    }

    // GET DETAIL TEST TYPE
    async function getDetailExam() {
        await axios.get(base_url + "test/" + testId, { params: { user_id: userJson.id } })
            .then(response => {
                setData(response.data.data);
                setTimeLeft(response.data.data.time_countdown);
            })
            .catch(error => {
                console.log(error);
                setStatus(error.response.status);
            });
    }

    // TIME COUNTDOWN 
    useEffect(() => {
        if (!isResult) {
            if (timeLeft <= 0) {
                navigate(`/result?test_id=${testId}&user_id=${userJson.id}`);
            };

            const intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 60000);

            return () => clearInterval(intervalId);
        }
    }, [timeLeft]);

    useEffect(() => {
        resultIsRead();
        allQuestionAnswer();
        getDetailExam();
    }, []);

    return (
        <>
            {/* Time Countdown */}
            {status === 404 || isResult === true ? (
                <p></p>
            ) : (
                <>
                    {data ? (
                        <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white w-37 fixed right-4">
                            <p className="font-semibold text-center">
                                <span>Remaining Time</span>
                                <br />
                                <span className="text-red-500 text-3xl">{timeLeft}</span>
                                <br />
                                <span>Minute</span>
                            </p>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </>
            )}

            {status === 200 ? (
                <>
                    {/* Exam Date */}
                    <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                        {data ? (
                            <>
                                <div>
                                    <p className="text-gray-700 font-bold text-2xl uppercase">
                                        {data.name}
                                    </p>
                                </div>
                                <div className="px-4 pt-4">
                                    <div className="mb-1">
                                        <p className="text-gray-400">{data.date}</p>
                                        <p className="text-gray-400 capitalize">Duration {data.duration}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Loading />
                        )}
                    </div>

                    {/* Exam Rule */}
                    <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                        {data ? (
                            <>
                                <div>
                                    <p className="text-gray-700 font-bold">
                                        Examination Rule
                                    </p>
                                </div>
                                <div className="px-4 pt-4">
                                    <div className="mb-1">
                                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Loading />
                        )}
                    </div>
                </>
            ) : (
                // Empty
                <div></div>
            )}
        </>
    )
}

export default ExaminationRule