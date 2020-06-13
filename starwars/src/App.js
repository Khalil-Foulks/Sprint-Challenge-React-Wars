import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swData, setSwData] = useState([])
  
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
    .then(res =>{
      //debugger
      console.log(res)
      setSwData(res.data.results)

    })
    .catch(err =>{
      debugger
      console.log('Error MSG:', err)
    })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character key={swData.name} charInfo = {swData}/>
    </div>
  );
}

export default App;
