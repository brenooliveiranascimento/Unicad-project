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

  const delivery = new Delivery({
    client: 'Breno',
    deliveryDate: new Date(),
    departure: 'ddkwaopdkwaopd',
    destiny: 'dawijdwad',
  });

  expect(delivery).toBeInstanceOf(Delivery);
  expect(delivery.props.client).toEqual('Breno');
});
