export const fetchDataFromMeters = async (meterId: number) => {
      await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/')
      .then(res => res.json())
      .then( data => data[meterId - 1].pointOfDelivery)
}