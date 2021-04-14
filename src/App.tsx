import React, { useState, useEffect} from 'react';
import './App.css';
import MeterDataDisplayer from './components/MeterDataDisplayer';
import EnergyConsumption from './components/EnergyConsumption';


function App() {

      const GAS_ID = 1;
      const ELECTRICITY_ID = 2;

      const [energyPod, setEnergyPod] = useState({
            gasPod: "",
            electricityPod: ""
      })

      const [energyDate, setEnergyDate] = useState({
            gasDate: "",
            gasTime: "",
            electricityDate: "",
            electricityTime: ""
      })

      useEffect(() => {

            async function getEnergyPods() {
                  const response = await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/');
                  const data = await response.json();

                  const podDatas = {
                        gasPod: data[GAS_ID - 1].pointOfDelivery,
                        electricityPod: data[ELECTRICITY_ID - 1].pointOfDelivery
                  }
                  setEnergyPod(podDatas);

                  const metersCreationDate = {
                        gasDate: data[GAS_ID - 1].createdAt.substr(0, 10),
                        gasTime: data[GAS_ID - 1].createdAt.substr(11, 8),
                        electricityDate: data[ELECTRICITY_ID - 1].createdAt.substr(0, 10),
                        electricityTime: data[ELECTRICITY_ID - 1].createdAt.substr(11, 8)
                  }
                  setEnergyDate(metersCreationDate);
            }
            getEnergyPods()
      }, [])
      
      const { gasPod, electricityPod } = energyPod
      const { gasDate, gasTime, electricityDate, electricityTime } = energyDate

      return (
            <section className="app-container">
                  <h1>Bonjour, Voici votre consommation : </h1>
                  <div className="meters-data-container">
                        <MeterDataDisplayer meterTime={gasTime} meterDate={gasDate} energyType={gasPod} label="Gaz" />
                        <EnergyConsumption />

                        <MeterDataDisplayer meterTime={electricityTime} meterDate={electricityDate} energyType={electricityPod} label="Electricité" />
                        <EnergyConsumption /> 
                  </div>
            </section>
      )
}



export default App;
