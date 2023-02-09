import { expect, test } from 'vitest';
import Register from './Register';
import Update from './Update';
import Get from './Get';
import { fulanoUnitMockWhitDestination } from '../../utils/Mocks/DeliverysMocks';
import Delivery from '../../entities/Delivery/Delivery';

test('Create an delivery', () => {
  const delivery = new Register();

  expect(delivery.execute(fulanoUnitMockWhitDestination))
    .resolves.toBeInstanceOf(Delivery);
});

test('Update an delivery', () => {
  const delivery = new Update();

  expect(delivery.execute(fulanoUnitMockWhitDestination))
    .resolves.toBeInstanceOf(Delivery);
});

test('Get all deliverys', () => {
  const delivery = new Get();

  expect(delivery.execute()).resolves.toBeCalled();
});
