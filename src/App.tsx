import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromMeters } from './api-calls/fetchDataFromMeters';

function App() {

      useEffect(() => {
            fetchDataFromMeters(1);
            fetchDataFromMeters(2);
      }, [])

      return (
            <h1>Ça marche !</h1>
      )
}

export default App;
