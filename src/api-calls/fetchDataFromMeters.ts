export const fetchDataFromMeters = (meterId: number) => {
      fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/')
      .then(res => res.json())
      .then( data => console.log({
            pointOfDelivery : data[meterId - 1].pointOfDelivery,
            createdDate : data[meterId - 1].createdAt.substr(0, 10), // On extrait la chaine de caractère correspondant à la date
            createdTime: data[meterId - 1].createdAt.substr(11, 8) // On extrait la chaine de caractère correspondant à la date
      }))
      //string => string.substr(0, 10)
}