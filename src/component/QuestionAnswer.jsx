import React, { useState, useEffect } from 'react'
import { base_url } from "../BaseUrl";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import FinishButton from './FinishButton';
import 'react-toastify/dist/ReactToastify.css';

function QuestionAnswer() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(200);
    const [isResult, setIsResult] = useState(false);

    const userInfo = localStorage.getItem("user_info");
    const userJson =  JSON.parse(userInfo);
    const params = new URLSearchParams(window.location.search);
    const testId = params.get('test_id');

    // GET ALL QUESTION AND ANSWER
    async function allQuestionAnswer() {
        await axios.get(base_url + "question", { params: { test_id: testId, user_id: userJson.id } })
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error(error);
                setStatus(error.response.status);
            });
    }

    // BLOCK USER WHO HAS RESULT
    async function resultIsRead() {
        await axios.get(base_url + "result/exist-or-not", { params: { test_id: testId, user_id: userJson.id } })
        .then(response => {
            if (response.data.data) {
                setIsResult(true);
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
        
    // SAVE ANSWER
    const handleOptionChange = async (event) => {
        await axios.post(base_url + "user-answer", {
            "user_id": event.target.getAttribute('data-user-id'),
            "test_id": event.target.getAttribute('data-test-id'),
            "question_id": event.target.getAttribute('data-question-id'),
            "answer_id": event.target.value,
            
        }).then((response) => {
            const message = "You're successfully saved the answer.";
            const radioname =  event.target.name;
            const radios = document.getElementsByName(radioname);
            
            // ALERT MESSAGE WHEN SAVE ANSWER SUCCESS
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });

            // REMOVE ATTR FROM OTHER INPUT
            for (let i = 0; i < radios.length; i++) {
              if (radios[i] !== event.target) {
                radios[i].removeAttribute('checked');
              }
            }
          
            // ADD THE 'CHECKED' ATTRIBUTE TO THE SELECTED RADIO BUTTON
            event.target.checked = true;
        }).catch((error) => {
            // ALERT MESSAGE WHEN SAVE ANSWER FAILED
            toast.warning("Sorry, Your page was expired.", {
                position: toast.POSITION.TOP_RIGHT
            });

            console.log(error);
        });
    }

    useEffect(() => {
        resultIsRead();
        allQuestionAnswer();
    }, []);

    return (
        <>
            {status === 404 || isResult === true ? (
                <PageNotFound />
            ) : (
                data.length >= 1 ? (
                    <>
                        {data.map((question, index) => (
                            <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto" key={question.id}>
                                <div className="">
                                    <p className="text-gray-700 text-base">
                                        {index + 1}. {question.question_text}
                                    </p>
                                </div>
                                <div className="px-4 pt-4">
                                    {question.answers.map((answer, i) => (
                                        <div className="flex items-center mb-1" key={answer.id}>
                                            <input
                                                type="radio"
                                                id={"option" + answer.id}
                                                name={"option" + question.id}
                                                value={answer.id}
                                                data-question-id={question.id}
                                                data-test-id={question.test_id}
                                                data-user-id={userJson.id}
                                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                checked={answer.user_ticked}
                                                onChange={handleOptionChange}
                                            />
                                            <label className="ml-2 text-gray-700">{answer.answer_text}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <ToastContainer />   
                        <FinishButton />       
                    </>         
                ) : (
                    <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                        <Loading />
                    </div>
                )
            )}
        </>
    );
}

export default QuestionAnswer