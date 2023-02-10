import DeliveryModel from "../../database/models/DeliveryModel";

export const allDeliverysMock = [
  { 
    id: 1,
    client: 'Breno',
    deliveryDate: new Date(),
  },
  { 
    id: 2,
    client: 'Fulano',
    deliveryDate: new Date(),
  },
  { 
    id: 3,
    client: 'Ciclano',
    deliveryDate: new Date(),
  },
  { 
    id: 4,
    client: 'Deltrano',
    deliveryDate: new Date(),
  },
]

export const fulanoUnitMock = {
  id: 99,
  client: "Fulano",
  deliveryDate: new Date(),
}

export const fulanoUnitMockWhitDestination = {
  client: 'Brenera',
  destiny: 'AAA',
  deliveryDate: new Date(),
  departureCoordenate: 'jdawiojdwiaod',
  destinyCoordenate: 'destinyCoordenateadwadwad',
  departureName: 'dawjidujwaiodwad',
  destinyName: 'jdiofawjdiowa',
  id: 2
}
