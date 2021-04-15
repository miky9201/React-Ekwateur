import React from 'react';
import electricite from '../images/electricite.png'
import gaz from '../images/gaz.png'

const MeterDataDisplayer = ({ meterTime, meterDate, energyType, label } : { meterTime: string, meterDate: string, energyType: string, label: string }) => {
      return (
            <div className="meters-data-div green">
   
                  <h2>{label}</h2> 
                  {label === "Gaz" ? 
                        <img id="gas"  src={gaz} alt="Logo Gaz" width="40px"/>
                        :
                        <img id="electricity" src={electricite} alt="Logo Electricité" width="40px"/>
                  }
                  <div>POD : {energyType}</div>
                  <div>Date de création : {meterDate}</div>
                  <div>Heure de création : {meterTime}</div>
            </div>
            )
}

export default MeterDataDisplayer;