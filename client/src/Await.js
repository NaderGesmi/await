import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function Await() {
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);

    async function get() {
        const dataa = await axios.get("http://localhost:5000/get/get")
        setData(dataa);
        axios.get("http://localhost:5000/get/get1")
            .then(res => setData1(res.data))
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div className="App">
            {data == null ? <div className='loader'>
                <span></span>
                <span></span>
                <span></span>
                <h2>Loading data 1</h2>
            </div>
                : <p>data 1 Loaded..</p>}
            {data1 == null ? <div className='loader'>
                <span></span>
                <span></span>
                <span></span>
                <h2>Loading data 2</h2>
            </div>
                : <p>data 2 Loaded..</p>}
        </div>
    );
}

export default Await;
