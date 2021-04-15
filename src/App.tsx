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
                  {
                        showClickedEnergy ?
                              <EnergyContainer>
                                    <MeterDataDisplayer meterTime={electricityTime} meterDate={electricityDate} energyType={electricityPod} label="Electricité" />
                                    <EnergyConsumption energyType={"electricity"} energyId={ELECTRICITY_ID} /> 
                              </EnergyContainer>
                              :
                              <EnergyContainer>
                                    <MeterDataDisplayer meterTime={gasTime} meterDate={gasDate} energyType={gasPod} label="Gaz" />
                                    <EnergyConsumption energyType={"gas"} energyId={GAS_ID}/>
                              </EnergyContainer>
                  }
                  <EnergyToggleButton showClickedEnergy={showClickedEnergy} setShowClickedEnergy={setShowClickedEnergy}/>
            </section>
      )
}



export default App;
