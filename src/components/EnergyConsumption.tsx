import React, { useState, useEffect } from 'react';
import YearFilter from './YearFilter';

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
            async function getEnergyConsumption() {
                  const response = await fetch(`https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/${energyId}/${energyType}`);
                  const data = await response.json();
                  const emptyArr: any[] = []

                  for (let index = 0; index < data.length; index++) {
                        if (energyId === 1) {
                              emptyArr.push({
                                    id: data[index].id,
                                    date: data[index].createdAt.substr(0, 10), // isoler la date dans la string fournie
                                    time: data[index].createdAt.substr(11, 8), //isoler l'heure dans la string fournie
                                    indexHigh: data[index].indexHigh
                              })
                        } else {
                              emptyArr.push({
                                    id: data[index].id,
                                    date: data[index].createdAt.substr(0, 10), // isoler la date dans la string fournie
                                    time: data[index].createdAt.substr(11, 8), //isoler l'heure dans la string fournie
                                    indexHigh: data[index].indexHigh,
                                    indexLow: data[index].indexLow
                              })
                        }
                  }

                  energyId === 1 ? 
                  setGasConsumption(emptyArr) : 
                  setElectricityConsumption(emptyArr)

            }

            getEnergyConsumption()

      }, [energyId, energyType])

      const filterGasByYear = gasConsumption.filter(item => (item.date.substr(0, 4) === filterValue))
      const filterElectricityByYear = electricityConsumption.filter(item => (item.date.substr(0, 4) === filterValue))

      return (
            <div className="meters-data-div white">
                  <YearFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
                  <ul>
                        {energyId === 1 ? // Est ce que l'on est sur la page gaz ?
                              filterValue !== "0" ?
                              filterGasByYear.map( item => <li key={item.id}>Le {item.date}, à {item.time}, vous avez consommé {item.indexHigh} kwH de Gaz</li>)
                              : gasConsumption.map( item => <li key={item.id}>Le {item.date}, à {item.time}, vous avez consommé {item.indexHigh} kwH de Gaz</li>)      
                        : 
                              filterValue !== "0" ?
                              filterElectricityByYear.map( item => (
                                    <div key={item.id} className="array-line green">
                                          <div>{item.date}, à {item.time}</div>
                                          <div>Heure Creuse :  {item.indexLow}</div>
                                          <div>Heure Pleine : {item.indexHigh}</div>
                                    </div>
                              ))
                              : electricityConsumption.map( item => (
                                    <div key={item.id} className="array-line green">
                                          <div className="soft-yellow">{item.date}, à {item.time}</div>
                                          <div>Heure Creuse :  {item.indexLow}</div>
                                          <div>Heure Pleine : {item.indexHigh}</div>
                                    </div>  
                              ))
                        }
                  </ul>
            </div>
      )
}

export default EnergyConsumption;