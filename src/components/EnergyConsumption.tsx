import React, { useState, useEffect } from 'react';

const EnergyConsumption = () => {
      const [ gasConsumption, setGasConsumption ] = useState([])

      useEffect(() => {
            async function getGasConsumption() {
                  const response = await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/1/gas');
                  const data = await response.json();
                  const emptyArr: any = [];
                  for (let index = 0; index < data.length; index++) {
                        const gasConsumptionLine = {
                              date: data[index].createdAt.substr(0, 10),
                              time: data[index].createdAt.substr(11, 8),
                              indexHigh: data[index].indexHigh
                        }
                        emptyArr.push(gasConsumptionLine)
                  }
                  setGasConsumption(emptyArr)
            }
            getGasConsumption()
      }, [])

      return (
            <div className="meters-data-div white">
                  {gasConsumption.map(line => <p>Date du relevé : {line} </p>)}
            </div>
            )
}

export default EnergyConsumption;