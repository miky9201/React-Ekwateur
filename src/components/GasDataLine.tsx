import React from 'react';

interface gasConsumptionType {
      id: string;
      date: string;
      time: string;
      indexHigh : number;
}

const GasDataLine = ({ item } : { item: gasConsumptionType}) => (
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
)

export default GasDataLine;
