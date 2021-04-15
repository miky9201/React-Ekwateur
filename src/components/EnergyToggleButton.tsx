import React from 'react';

const EnergyToggleButton = ({ showClickedEnergy, setShowClickedEnergy } 
: { showClickedEnergy: boolean, setShowClickedEnergy: React.Dispatch<React.SetStateAction<boolean>> }) => {
      
      return (
            <button className="hard-yellow" onClick={() => setShowClickedEnergy(!showClickedEnergy)}>
                  {!showClickedEnergy ? 'Voir votre Consommation Électrique' :  'Voir votre Consommation de Gaz'}
            </button> 
      )
}

export default EnergyToggleButton;