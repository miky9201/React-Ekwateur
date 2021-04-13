import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchDataFromMeters } from './api-calls/fetchDataFromMeters';

function App() {
      const [ dataMeters, setDataMeters ] = useState();

      const GAS_ID = 1;
      const ELECTRICITY_ID = 2;


      const toto = {
            pointOfDelivery: undefined,
            createdDate: undefined,
            createdTime: undefined
      };

      useEffect(() => {
            fetchDataFromMeters(GAS_ID, toto);
      }, [])

      const MetersDataDisplayer = () => (
            <div className="meters-data-div white">
                  <p>La conso est de {toto.pointOfDelivery}</p>
            </div>
      )

      return (
            <section className="app-container">
                  <h1 onClick={() => console.log(toto.pointOfDelivery)}>Bonjour, Voici votre consommation : </h1>
                  <div className="meters-data-container">
                        <MetersDataDisplayer />
                  </div>
            </section>
      )
}

export default App;
