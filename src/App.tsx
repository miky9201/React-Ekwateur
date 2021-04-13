import React, { useState, useEffect} from 'react';
import './App.css';
import { fetchDataFromMeters } from './api-calls/fetchDataFromMeters';

function App() {

      const [gasPod, setGasPod] = useState(null)

      // const MetersDataDisplayer = () => (
      //       <div className="meters-data-div white">
      //             <p>POD Gaz : {}</p>
      //       </div>
      // )

      const GAS_ID = 1;
      const ELECTRICITY_ID = 2;

      useEffect(() => {
            async function anyNameFunction() {
                  const response = await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/');
                  const data = await response.json();
                  const item = data[GAS_ID - 1].pointOfDelivery;
                  setGasPod(item);
            }
            anyNameFunction()
      }, [])
      

      return (
            <section className="app-container">
                  <h1>Bonjour, Voici votre consommation : </h1>
                  <div className="meters-data-container">
                        {/* <MetersDataDisplayer /> */}
                        <div className="meters-data-div white">
                              <p>POD Gaz : {gasPod}</p>
                        </div>
                  </div>
            </section>
      )
}



export default App;
