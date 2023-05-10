import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { base_url } from "../BaseUrl";
import Loading from './Loading';

function QuestionAnswer() {
    const [data, setData] = useState([]);
    // const [answerId, setAnswerId] = useState();
    // const [questionId, setQuestionId] = useState();
    // const [testId, setTestId] = useState();
    // const [userId, setUserId] = useState();

    // GET ALL QUESTION AND ANSWER
    async function allQuestionAnswer() {
        await axios.get(base_url + "question")
        .then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    // SAVE ANSWER
    const handleOptionChange = async (event) => {
        // setAnswerId(event.target.value);
        // setQuestionId(event.target.getAttribute('data-question-id'));
        // setTestId(event.target.getAttribute('data-test-id'));
        // setUserId(event.target.getAttribute('data-user-id'));

        await axios.post(base_url + "user-answer", {
            "user_id": event.target.getAttribute('data-user-id'),
            "test_id": event.target.getAttribute('data-test-id'),
            "question_id": event.target.getAttribute('data-question-id'),
            "answer_id": event.target.value,
        }).then((response) => {
            console.log(response.data.data);
            
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        allQuestionAnswer();
    }, []);

    return (
        <>
            {data.length > 1 ? (
                data.map((question, index) => (
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
                                    data-user-id="1"
                                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    onChange={handleOptionChange}
                                />
                                <label className="ml-2 text-gray-700">{answer.answer_text}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    ))
                ) : (
                <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
                    <Loading />
                </div>
            )}
        </>
    );
}

export default QuestionAnswer