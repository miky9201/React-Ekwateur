import React, { useState, useEffect } from 'react';
import YearFilter from './YearFilter';
import { getEnergyConsumption } from '../utils/getEnergyConsumption';
import GasDataLine from './GasDataLine';
import ElectricityDataLine from './ElectricityDataLine';


const EnergyConsumption = ({ energyType, energyId } : { energyType: string, energyId: number }) => {

      interface gasConsumptionType {
            id: string;
            date: string;
            time: string;
            indexHigh : number;
      }

      interface electricityConsumptionType {
            id: string;
            date: string;
            time: string;
            indexHigh : number;
            indexLow: number;
      }

      const [ gasConsumption, setGasConsumption ] = useState<gasConsumptionType[]>([]);
      const [ electricityConsumption, setElectricityConsumption ] = useState<electricityConsumptionType[]>([]);
      const [ filterValue, setFilterValue ] = useState<string>("0");

      useEffect(() => {
            getEnergyConsumption(energyId, energyType, setGasConsumption, setElectricityConsumption)
      }, [energyId, energyType])

      const filterGasByYear = gasConsumption.filter(item => (item.date.substr(6, 4) === filterValue))
      const filterElectricityByYear = electricityConsumption.filter(item => (item.date.substr(6, 4) === filterValue))

      return (
            <div className="energy-data-div white">
                  <YearFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
                  {energyId === 1 ? // Est ce que l'on est sur la page gaz ?
                        filterValue !== "0" ? 
                              filterGasByYear.map( item => <GasDataLine item={item} />)
                              : gasConsumption.map( item => <GasDataLine item={item} />)
                  : 
                        filterValue !== "0" ? 
                              filterElectricityByYear.map( item => <ElectricityDataLine item={item} />)
                              : electricityConsumption.map( item => <ElectricityDataLine item={item} />)
                  }
            </div>
      )
}

export default EnergyConsumption;