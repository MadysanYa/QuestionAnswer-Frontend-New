import React from 'react'
import { useNavigate  } from 'react-router-dom';
import '../css/App.css';

function FinishButton() {
    const navigate = useNavigate();

    const userInfo = localStorage.getItem("user_info");
    const userJson =  JSON.parse(userInfo);

    const params = new URLSearchParams(window.location.search);
    const testId = params.get('test_id');

    // GET DETAIL RESULT BY USER
    function getDetailResult(id) {
        navigate(`/result?test_id=${testId}&user_id=${userJson.id}`);
    }

    return (
        <div className="py-6 max-w-screen-lg mx-auto grid justify-items-end">
           <button onClick={getDetailResult} className="cursor-pointer py-2 px-4 text-white text-center rounded bg-shinhan">Finish Exam</button>
        </div>
    )
}

export default FinishButton