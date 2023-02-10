import { afterEach, describe, expect, test } from 'vitest';
import Register from './Register';
import Update from './Update';
import sinon from 'sinon';
import Get from './Get';
import { fulanoUnitMock, fulanoUnitMockWhitDestination } from '../../utils/Mocks/DeliverysMocks';
import Delivery from '../../entities/Delivery/Delivery';
import DeliveryModel from '../../database/models/DeliveryModel';
import CustomError from '../../utils/StatusError';
import Delete from './Delete';

describe('Test in Service of Delivery', () => {
  test('Create an delivery', () => {
    const delivery = new Register();
    sinon.stub(DeliveryModel, 'create').resolves(fulanoUnitMock as DeliveryModel);
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

  test('Delete an delivery', () => {
    const delivery = new Delete();
    sinon.stub(DeliveryModel, 'findByPk').resolves(fulanoUnitMock as any);
    sinon.stub(DeliveryModel, 'destroy').resolves();
    expect(delivery.execute(1)).resolves.deep.equal('Delivery delected with success!');
  });
  
  afterEach(function () {
    sinon.restore();
  });  
});
