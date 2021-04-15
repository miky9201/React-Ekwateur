import React from 'react';

const EnergyToggleButton = ({ showClickedEnergy, setShowClickedEnergy } 
: { showClickedEnergy: boolean, setShowClickedEnergy: React.Dispatch<React.SetStateAction<boolean>> }) => {
      
      return (
            <button onClick={() => setShowClickedEnergy(!showClickedEnergy)}>
                  {!showClickedEnergy ? 'Voir Consommation Électrique' :  'Voir Consommation de Gaz'}
            </button> 
      )
}

export default EnergyToggleButton;