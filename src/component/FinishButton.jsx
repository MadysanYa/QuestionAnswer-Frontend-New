import React, {useState } from 'react'
import axios from 'axios';
import { base_url } from '../BaseUrl';
import { useNavigate  } from 'react-router-dom';
import '../css/App.css';

function FinishButton() {
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    // GET DETAIL RESULT BY USER
    async function getDetailResult(id) {
        await axios.get(base_url + "result", { params: { user_id: 2} })
        .then(response => {
            setResult(response.data.data);
            navigate('/result');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="py-6 max-w-screen-lg mx-auto grid justify-items-end">
           <button onClick={getDetailResult} className="cursor-pointer py-2 px-4 text-white text-center rounded bg-shinhan">Finish Exam</button>
        </div>
    )
}

export default FinishButton