import React from 'react';

const MeterDataDisplayer = ({ meterTime, meterDate, energyType, label } : { meterTime: string, meterDate: string, energyType: string, label: string }) => {

      return (
            <div className="meters-data-div green">
                  <p>{label} POD : {energyType}</p>
                  <p>Date de création : {meterDate}</p>
                  <p>Heure de création : {meterTime}</p>
            </div>
            )
}

export default MeterDataDisplayer;