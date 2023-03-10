export const reduxState = {
  deliverys: {
    deliverys: [
      {
        id: 1,
        client: "Ciclano",
        deliveryDate: "2023-04-20T00:00:00.000Z",
        deliverysDestination: {
          id: 1,
          departureCoordenate: "-15.0390482 -41.9337904",
          destinyCoordenate: "-19.919052 -43.9386685",
          departureName: "Cordeiros, BA, 46280-000, Brasil",
          destinyName: "Belo Horizonte, MG, Brasil",
          deliveryId: 11
        }
      },
      {
        id: 2,
        client: "Fulano de tal",
        deliveryDate: "2026-11-11T00:00:00.000Z",
        deliverysDestination: {
          id: 2,
          departureCoordenate: "45.9393833 -0.9557568000000001",
          destinyCoordenate: "48.856614 2.3522219",
          departureName: "W2QV+QM, 17300 Rochefort, França",
          destinyName: "Paris, França",
          deliveryId: 13
        }
      }
    ],
    error: false,
    loading: false,
    currDelivery: {
      client: "",
      deliveryDate: "",
      deliverysDestination: {
        departureCoordenate: "",
        departureName: "",
        destinyCoordenate: "",
        destinyName: ""
      }
    }
  }
};