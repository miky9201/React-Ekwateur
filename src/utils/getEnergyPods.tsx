export const getEnergyPods = async (
GAS_ID: number,
ELECTRICITY_ID: number,
setEnergyPod: React.Dispatch<React.SetStateAction<{
      gasPod: string;
      electricityPod: string;
  }>>,
  setEnergyDate: React.Dispatch<React.SetStateAction<{
      gasDate: string;
      gasTime: string;
      electricityDate: string;
      electricityTime: string;}>>) => {

      const response = await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/');
      const data = await response.json();

      const podDatas = {
            gasPod: data[GAS_ID - 1].pointOfDelivery,
            electricityPod: data[ELECTRICITY_ID - 1].pointOfDelivery
      }
      setEnergyPod(podDatas);

      const metersCreationDate = {
            gasDate: data[GAS_ID - 1].createdAt.substr(0, 10),
            gasTime: data[GAS_ID - 1].createdAt.substr(11, 8),
            electricityDate: data[ELECTRICITY_ID - 1].createdAt.substr(0, 10),
            electricityTime: data[ELECTRICITY_ID - 1].createdAt.substr(11, 8)
      }
      setEnergyDate(metersCreationDate);
}