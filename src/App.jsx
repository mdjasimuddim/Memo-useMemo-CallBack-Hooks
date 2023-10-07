import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Message from './Components/Message';
// import axios from "axios"
// import {Helmet} from "react-helmet";
// import Page_title from './Page_title';


const App = () => {
  // const [users, setUsers] = useState([])
  // const useResource = async() => {
  //   const response = await axios.get("http://localhost:3001/users")
  //   setUsers(response.data);
  // }
  // useEffect(()=> {
  //   useResource();
  // }, [])
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)
  console.log('Rendering')

  const handleIncrementMessage = useCallback (() => {
    setCount(count + 1)
  }, [count])

  const calculatedNumber = useMemo(()=> {
    let number = 0;
    for (let index = 0; index < 500000000; index++) {
      number++
    }
    return number
  },[])
  return (
    <div>
      {toggle ? "ON" : "OFF"}
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <h2>Number:{calculatedNumber}</h2>
      <h2>Count:{count}</h2>
      <button onClick={()=>{setCount(count => count + 1)}}>Increment</button>
      <Message numberOfCounts={count} onHandleIncrement = {handleIncrementMessage}/>
    </div>
  )
}

export default App