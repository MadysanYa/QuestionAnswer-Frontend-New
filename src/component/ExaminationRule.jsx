import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { base_url } from '../BaseUrl';
import Loading from './Loading';

function ExaminationRule() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(200);

    // GET DETAIL TEST TYPE
    async function getDetailType() {
        const params = new URLSearchParams(window.location.search);
        const testId = params.get('test_id');

        await axios.get(base_url + "test/" + testId)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
                setStatus(error.response.status);
            });
    }

    useEffect(() => {
        getDetailType();
    }, []);

    return (
        <>
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