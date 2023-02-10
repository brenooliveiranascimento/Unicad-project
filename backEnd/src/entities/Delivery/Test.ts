import { expect, test } from 'vitest';
import Delivery from './Delivery';

test('create an delivery', () => {
  const delivery = new Delivery({
    "client": "Brenera",
    "deliveryDate": new Date(),
    "departureCoordenate": "jdawiojdwiaod",
    "destinyCoordenate": "destinyCoordenateadwadwad",
    "departureName": "dawjidujwaiodwad",
    "destinyName": "jdiofawjdiowa"
  });

  expect(delivery).toBeInstanceOf(Delivery);
  expect(delivery.props.client).toEqual('Breno');
});
