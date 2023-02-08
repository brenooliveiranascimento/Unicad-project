import { expect, test } from 'vitest';
import Delivery from './Delivery';

test('create an delivery', () => {

  const deliveryData = {
    client: 'Breno',
    deliveryDate: new Date(),
    departure: 'ddkwaopdkwaopd',
    destiny: 'dawijdwad',
    id: 2
  }

  const delivery = new Delivery(
    'Breno',
    new Date(),
    'ddkwaopdkwaopd',
    'dawijdwad',
    2
  );

  expect(delivery).toBeInstanceOf(Delivery);
  expect(delivery.client).toEqual('Breno');
});
