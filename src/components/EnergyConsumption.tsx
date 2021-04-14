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
      const [ filterValue, setFilterValue ] = useState<string>("2019");

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

      return (
            <div className="meters-data-div white">
                  <YearFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
                  <ul>
                        {energyId === 1 &&
                              gasConsumption.filter(item => (item.date.substr(0, 4) === filterValue))
                              .map( item => <li key={item.id}>Le {item.date}, à {item.time}, vous avez consommé {item.indexHigh} kwH de Gaz</li>)
                        }
                        {energyId === 2 &&
                              electricityConsumption.filter(item => (item.date.substr(0, 4) === filterValue))
                              .map( item => (    
                                    <ul>
                                          <li key={item.id}>Le {item.date}, à {item.time}, vous avez consommé {item.indexLow} kwH d'Électricité en heures creuses</li>
                                          <li key={item.id}>Le {item.date}, à {item.time}, vous avez consommé {item.indexHigh} kwH d'Électricité en heures pleines</li>
                                    </ul>
                              ))
                        }
                  </ul>
            </div>
      )
}

export default EnergyConsumption;