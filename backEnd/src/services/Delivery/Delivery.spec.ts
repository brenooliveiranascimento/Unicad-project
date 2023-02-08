import { expect, test } from 'vitest';
import Delivery from '../../entities/Delivery/Delivery';
import Register from './Register';

test('create an delivery', async () => {
  const deliveryData = {
    id: 2,
    client: 'Breno',
    deliveryDate: new Date(),
    departure: 'ddkwaopdkwaopd',
    destiny: 'dawijdwad',
  };

  const service = new Register();
  expect(service.execute(deliveryData)).resolves.toBeInstanceOf(Delivery);
});
