import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import EnergyContainer from './components/EnergyContainer';
import MeterDataDisplayer from './components/MeterDataDisplayer';


it('App renders <h1> title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bonjour, Voici votre consommation :/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Energy Container', () => {
      // automatically unmount and cleanup DOM after the test is finished.
      afterEach(cleanup);
    
      it('renders without error', () => {
        render(<EnergyContainer />);
      });
});

describe('Meter Data Displayer', () => {
      // automatically unmount and cleanup DOM after the test is finished.
      afterEach(cleanup);
    
      it('renders without error', () => {
        render(<MeterDataDisplayer meterTime="test" meterDate="test" energyType="test" label="test" />);
      });
});





