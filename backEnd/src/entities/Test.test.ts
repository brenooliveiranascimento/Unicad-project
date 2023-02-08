import { expect, test } from 'vitest';
import Delivery from './Delivery';

test('create an delivery', () => {
  const deliveryData = new Delivery({
    client: 'Breno',
    deliveryDate: new Date(),
    departure: 'ddkwaopdkwaopd',
    destiny: 'dawijdwad',
    id: 2
  });

  expect(deliveryData).toBeInstanceOf(Delivery);
  expect(deliveryData.getClient()).toEqual('Breno');
});
