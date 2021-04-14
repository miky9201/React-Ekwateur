import React from 'react';

interface meterDataDisplayerProps {
      [key: string]: {
            [key: string]: string
      }
}

interface electricityPodDataDisplayerProps extends meterDataDisplayerProps {
      electricityPod 
}

const MeterDataDisplayer = ({energyPod} : meterDataDisplayerProps) => {
      console.log(energyPod);
      const gas = energyPod.gasPod
      return (
            <div className="meters-data-div white">
                  <p>POD Gaz : {gas}</p>
            </div>
      )
}

export default MeterDataDisplayer;