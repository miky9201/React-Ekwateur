import React, { useState, useEffect} from 'react';
import './App.css';
import MeterDataDisplayer from './components/MeterDataDisplayer';

function App() {

      const [energyPod, setEnergyPod] = useState({})

      const GAS_ID = 1;
      const ELECTRICITY_ID = 2;

      useEffect(() => {

            async function getEnergyPods() {
                  const response = await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/');
                  const data = await response.json();
                  const item = {
                        gasPod: data[GAS_ID - 1].pointOfDelivery,
                        electricityPod: data[ELECTRICITY_ID - 1].pointOfDelivery
                  }
                  setEnergyPod(item);
            }

            getEnergyPods()
      }, [])
      

      return (
            <section className="app-container">
                  <h1>Bonjour, Voici votre consommation : </h1>
                  <div className="meters-data-container">
                        <MeterDataDisplayer energyPod={energyPod}/>
                  </div>
            </section>
      )
}



export default App;
