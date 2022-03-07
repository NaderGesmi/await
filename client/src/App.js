import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Await from './Await';
function App() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);

  function get() {
    axios.get("http://localhost:5000/get/get")
      .then(res => setData(res.data))
    axios.get("http://localhost:5000/get/get1")
      .then(res => setData1(res.data))
  }
  useEffect(() => {

    get()
    console.log("hiiiii");

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
      <hr className="rounded" />
      <Await />
    </div>
  );
}

export default App;
