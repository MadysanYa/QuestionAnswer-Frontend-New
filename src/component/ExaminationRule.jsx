import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { base_url } from '../BaseUrl';
import Loading from './Loading';

function ExaminationRule() {
    const [data, setData] = useState(null);

    // GET DETAIL TEST TYPE
    async function getDetailType(id) {
        const typeId = 1;

        await axios.get(base_url + "test/" + typeId)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getDetailType();
    }, []);

    return (
        <>
            {/* Exam Date */}
            <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                {data ? (
                    <>
                        <div>
                            <p className="text-gray-700 font-bold text-2xl">
                                {data.name}
                            </p>
                        </div>
                        <div className="px-4 pt-4">
                            <div className="mb-1">
                                <p>{data.date}</p>
                                <p>Duration {data.duration}</p>
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
                                <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    )
}

export default ExaminationRule