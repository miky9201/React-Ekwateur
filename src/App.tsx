import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromMeters } from './api-calls/fetchDataFromMeters';

function App() {

      useEffect(() => {
            fetchDataFromMeters(1);
            fetchDataFromMeters(2);
      }, [])

      const MetersDataDisplayer = () =>(
            <div className="meters-data-div white">
            </div>
      )
      

      return (
            <section className="app-container">
                  <h1>Ma Consommation</h1>
                  <div className="meters-data-container">
                        <MetersDataDisplayer />
                  </div>
                  <div className="energy-data-container">
                        <MetersDataDisplayer />
                        <MetersDataDisplayer />
                  </div>
                  
            </section>
      )
}

export default App;
