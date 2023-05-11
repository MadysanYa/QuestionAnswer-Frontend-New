import React, {useState } from 'react'
import axios from 'axios';
import Result from './Result';
import { base_url } from '../BaseUrl';

function FinishButton() {
    const [result, setResult] = useState(null);
    // const [finish, setFinish] = useState(false);
    // const history = useHistory();

    const myStyle = {
        backgroundColor: '#0b1966'
    };

    // GET DETAIL RESULT BY USER
    async function getDetailResult(id) {
        await axios.get(base_url + "result", { params: { user_id: 2} })
        .then(response => {
            console.log(response.data.data);
            setResult(response.data.data);
            // setFinish(true);
            // history.push(<Result />);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="py-6 max-w-screen-lg mx-auto grid justify-items-end">
           <button onClick={getDetailResult} className="cursor-pointer py-2 px-4 text-white text-center rounded" style={myStyle}>Finish Exam</button>
        </div>
    )
}

export default FinishButton