import React from 'react';

interface electricityConsumptionType {
      id: string;
      date: string;
      time: string;
      indexHigh : number;
      indexLow: number;
}

const ElectricityDataLine = ({ item } : { item: electricityConsumptionType}) => (
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
)

export default ElectricityDataLine;
