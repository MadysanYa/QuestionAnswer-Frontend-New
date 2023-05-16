import React, { useState, useEffect } from 'react'
import { base_url } from "../BaseUrl";
import axios from 'axios'
import Menu from './Menu';
import ExamLogo from '../image/exam.png';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function Examination() {
    const [data, setData] = useState([]);
    const userInfo = localStorage.getItem("user_info");
    const userJson = JSON.parse(userInfo);

    // CREATE RESULT WHEN USER START CLICK EXAM
    const createResultWithoutScore = async (testId) => {
        await axios.post(base_url + "result/create", {
            "user_id": userJson.id,
            "test_id": testId,
        })
        .then(response => {
            console.log("Successfully Create Result Temp.");

        })
        .catch(error => {
            console.error(error);
        });
    }

    // GET ALL EXAMINATION
    async function allExamination() {
        await axios.get(base_url + "test")
            .then(response => {
                setData(response.data.data);
                console.log("Successfully Get All Examination.");
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
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
                                <Link to={`/question?test_id=${exam.id}`} key={exam.id}>
                                    <div className="rounded overflow-hidden shadow-lg p-6 bg-white" onClick={() => createResultWithoutScore(exam.id)}>
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