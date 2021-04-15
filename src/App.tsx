import React, { useState, useEffect} from 'react';
import './App.css';
import MeterDataDisplayer from './components/MeterDataDisplayer';
import EnergyConsumption from './components/EnergyConsumption';
import EnergyContainer from './components/EnergyContainer';
import EnergyToggleButton from './components/EnergyToggleButton';
import logo from './images/logo.svg'
import { getEnergyPods } from './utils/getEnergyPods'


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

      const { gasPod, electricityPod } = energyPod;
      const { gasDate, gasTime, electricityDate, electricityTime } = energyDate;
      const [ showClickedEnergy, setShowClickedEnergy ] = useState<boolean>(false);
      

      useEffect(() => {
            getEnergyPods(GAS_ID, ELECTRICITY_ID, setEnergyPod, setEnergyDate )
      }, [])
      
      return (
            <section className="app-container">
                  <img id="logo"  src={logo} alt="logo"/>
                  <EnergyContainer>
                        <MeterDataDisplayer 
                        meterTime={showClickedEnergy? electricityTime : gasTime} 
                        meterDate={showClickedEnergy? electricityDate : gasDate} 
                        energyType={showClickedEnergy? electricityPod : gasPod} 
                        label={showClickedEnergy? "Electricité" : "Gaz"} />
                        <EnergyConsumption energyType={showClickedEnergy? "electricity" : "gas"} energyId={showClickedEnergy? ELECTRICITY_ID : GAS_ID} /> 
                  </EnergyContainer>
                  <EnergyToggleButton showClickedEnergy={showClickedEnergy} setShowClickedEnergy={setShowClickedEnergy}/>
            </section>
      )
}

export default App;
