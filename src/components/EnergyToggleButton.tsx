import React from 'react';

const EnergyToggleButton = ({ showClickedEnergy, setShowClickedEnergy } 
: { showClickedEnergy: boolean, setShowClickedEnergy: React.Dispatch<React.SetStateAction<boolean>> }) => {
      
      return (
            <button onClick={() => setShowClickedEnergy(!showClickedEnergy)}>
                  {!showClickedEnergy ? 'Gaz' :  'Electricité'}
            </button> 
      )
}

export default EnergyToggleButton;