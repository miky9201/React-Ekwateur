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

                  const emptyArr: any[] = [];
                  const reverseDate = (string: string): string => string.split('-').reverse().join('-') // Pour inverser le format de la date

                  for (let index = 0; index < data.length; index++) {
                        if (energyId === 1) {
                              emptyArr.push({
                                    id: data[index].id,
                                    date: reverseDate(data[index].createdAt.substr(0, 10)), // isoler la date dans la string fournie
                                    time: data[index].createdAt.substr(11, 8), //isoler l'heure dans la string fournie
                                    indexHigh: data[index].indexHigh
                              })
                        } else {
                              emptyArr.push({
                                    id: data[index].id,
                                    date: reverseDate(data[index].createdAt.substr(0, 10)), // isoler la date dans la string fournie
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

      const filterGasByYear = gasConsumption.filter(item => (item.date.substr(6, 4) === filterValue))
      const filterElectricityByYear = electricityConsumption.filter(item => (item.date.substr(6, 4) === filterValue))

      return (
            <div className="energy-data-div white">
                  <YearFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
                  {energyId === 1 ? // Est ce que l'on est sur la page gaz ?
                        filterValue !== "0" ?
                        filterGasByYear.map( item => (
                              <div key={item.id} className="array-line">
                                    {parseInt(item.date.substr(3, 2)) < 12 &&  parseInt(item.date.substr(0, 2)) < 31 ? 
                                          <div className="block-line">Le {item.date} à {item.time}</div> 
                                          : <div className="block-line">La date {item.date} n'est pas au bon format !</div>
                                    }
                                    <div className="block-line">
                                          <div>Consommation</div>  
                                          <div>{item.indexHigh} kWh</div>
                                    </div>
                              </div>
                        ))
                        : gasConsumption.map( item => (
                              <div key={item.id} className="array-line">
                                    {parseInt(item.date.substr(3, 2)) < 12 &&  parseInt(item.date.substr(0, 2)) < 31 ? 
                                          <div className="block-line">Le {item.date} à {item.time}</div> 
                                          : <div className="block-line">{item.date} n'est pas au bon format !</div>
                                    }
                                    <div className="block-line">
                                          <div>Consommation</div>  
                                          <div>{item.indexHigh} kWh</div>
                                    </div>
                              </div>
                        ))      
                  : 
                        filterValue !== "0" ?
                        filterElectricityByYear.map( item => (
                              <div key={item.id} className="array-line">
                                    {parseInt(item.date.substr(3, 2)) < 12 &&  parseInt(item.date.substr(0, 2)) < 31 ? 
                                          <div className="block-line">Le {item.date} à {item.time}</div> 
                                          : <div className="block-line">La date {item.date} n'est pas au bon format !</div>
                                    }
                                    <div className="block-line">
                                          <div>Conso Heure Creuse</div> 
                                          <div> {item.indexLow} kWh</div>
                                    </div>
                                    <div className="block-line">
                                          <div>Conso Heure Pleine</div>  
                                          <div>{item.indexHigh} kWh</div>
                                    </div>
                              </div>
                        ))
                        : electricityConsumption.map( item => (
                              <div key={item.id} className="array-line">
                                    {parseInt(item.date.substr(3, 2)) < 12 &&  parseInt(item.date.substr(0, 2)) < 31 ? 
                                          <div className="block-line">Le {item.date} à {item.time}</div> 
                                          : <div className="block-line">La date {item.date} n'est pas au bon format !</div>
                                    }
                                    <div className="block-line">
                                          <div>Conso Heure Creuse</div> 
                                          <div> {item.indexLow} kWh</div>
                                    </div>
                                    <div className="block-line">
                                          <div>Conso Heure Pleine</div>  
                                          <div>{item.indexHigh} kWh</div>
                                    </div>
                              </div>
                        ))
                  }
       
            </div>
      )
}

export default EnergyConsumption;