import { expect, it, describe } from 'vitest';
import Delivery from '../../entities/Delivery/Delivery';
import Register from './Register';

describe('In Delivery', () => {
  it('Create an delivery with success', async () => {
    const deliveryData = {
      id: 2,
      client: 'Breno',
      deliveryDate: new Date(),
      departure: 'ddkwaopdkwaopd',
      destiny: 'dawijdwad',
    };
  
    const service = new Register();
    expect(service.execute(deliveryData)).resolves.toBeInstanceOf(Delivery);
    expect(service.execute(deliveryData)).resolves.toBe(deliveryData);
  });
})