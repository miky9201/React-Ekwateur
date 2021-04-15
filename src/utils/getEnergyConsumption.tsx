import { reverseDate } from './reverseDate';

interface gasConsumptionType {
      id: string;
      date: string;
      time: string;
      indexHigh : number;
}

interface electricityConsumptionType {
      id: string;
      date: string;
      time: string;
      indexHigh : number;
      indexLow: number;
}
export const getEnergyConsumption = async (
energyId: number,  
energyType: string,
setGasConsumption: React.Dispatch<React.SetStateAction<gasConsumptionType[]>>, 
setElectricityConsumption: React.Dispatch<React.SetStateAction<electricityConsumptionType[]>>) => {
      const response = await fetch(`https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/${energyId}/${energyType}`);
      const data = await response.json();
      const emptyArr: any[] = [];

      for (let index = 0; index < data.length; index++) {
            if (energyId === 1) {
                  emptyArr.push({
                        id: data[index].id,
                        date: reverseDate(data[index].createdAt.substr(0, 10)), // isoler la date dans la string fournie et retourner la string pour afficher la date au format français
                        time: data[index].createdAt.substr(11, 8), //isoler l'heure dans la string fournie
                        indexHigh: data[index].indexHigh
                  })
            } else {
                  emptyArr.push({
                        id: data[index].id,
                        date: reverseDate(data[index].createdAt.substr(0, 10)), // isoler la date dans la string fournie
                        time: data[index].createdAt.substr(11, 8), //isoler l'heure dans la string fournie
                        indexHigh: data[index].indexHigh,
                        indexLow: data[index].indexLow
                  })
            }
      }
      energyId === 1 ? 
      setGasConsumption(emptyArr) : 
      setElectricityConsumption(emptyArr)
}