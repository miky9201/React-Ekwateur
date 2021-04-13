export const fetchDataFromMeters = async (meterId: number, toto: any) => {
      await fetch('https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/')
      .then(res => res.json())
      .then( data => {
            toto.pointOfDelivery = data[meterId - 1].pointOfDelivery;
            toto.createdDate = data[meterId - 1].createdAt.substr(0, 10);
            toto.createdTime = data[meterId - 1].createdAt.substr(11, 8);
      })
}