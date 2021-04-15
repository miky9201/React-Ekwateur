import React from 'react';
import electricite from '../images/electricite.png'
import gaz from '../images/gaz.png'

const MeterDataDisplayer = ({ meterTime, meterDate, energyType, label } : { meterTime: string, meterDate: string, energyType: string, label: string }) => {
      const reverseDate = (string: string): string => string.split('-').reverse().join('-')
      
      return (
            <div className="meters-data-div green">
   
                  <h2>{label}</h2> 
                  {label === "Gaz" ? 
                        <img id="gas"  src={gaz} alt="Logo Gaz" width="40px"/>
                        :
                        <img id="electricity" src={electricite} alt="Logo Electricité" width="40px"/>
                  }
                  <div><strong>POD</strong> : {energyType}</div>
                  <div><strong>Date de création</strong> : {reverseDate(meterDate)}</div>
                  <div><strong>Heure de création</strong> : {meterTime}</div>
            </div>
            )
}

export default MeterDataDisplayer;