import { afterEach, describe, expect, it } from 'vitest';
import Register from './Register';
import Update from './Update';
import sinon from 'sinon';
import Get from './Get';
import { fulanoUnitMock, fulanoUnitMockWhitDestination } from '../../utils/Mocks/DeliverysMocks';
import Delivery from '../../entities/Delivery/Delivery';
import DeliveryModel from '../../database/models/DeliveryModel';
import Delete from './Delete';

describe('Test in Service of Delivery', () => {
  it('Create an delivery', () => {
    const delivery = new Register();
    sinon.stub(DeliveryModel, 'create').resolves(fulanoUnitMock as DeliveryModel);
    expect(delivery.execute(fulanoUnitMockWhitDestination))
      .resolves.toBeInstanceOf(Delivery);
  });
  
  it('Update an delivery', () => {
    const delivery = new Update();
    
    sinon.stub(DeliveryModel, 'update').resolves();

    const updateDelivery = delivery.execute(fulanoUnitMockWhitDestination)

    expect(updateDelivery).resolves.toBeInstanceOf(Delivery);
  });

  it('Throws an error when updating a delivery that does not exist', () => {
    const delivery = new Update();

    sinon.stub(DeliveryModel, 'findByPk').resolves(undefined);
    sinon.stub(DeliveryModel, 'destroy').resolves();

      const update = delivery.execute({ ...fulanoUnitMockWhitDestination, id: 99999 });
      expect(update).resolves.deep.equal("Delivery dont exist")
  });
  
  it('Get all deliverys', () => {
    const delivery = new Get();

    sinon.stub(DeliveryModel, 'findAll').resolves([fulanoUnitMock as DeliveryModel]);

    expect(delivery.execute()).resolves.deep.equal([fulanoUnitMock]);
  });

  it('Delete an delivery', () => {
    const delivery = new Delete();

    sinon.stub(DeliveryModel, 'findByPk').resolves(fulanoUnitMock as DeliveryModel);
    sinon.stub(DeliveryModel, 'destroy').resolves();

    expect(delivery.execute(1)).resolves.deep.equal(true);
  });

  it('Delete a delivery that does not exist', () => {
    const delivery = new Delete();

    sinon.stub(DeliveryModel, 'findByPk').resolves(undefined);
    sinon.stub(DeliveryModel, 'destroy').resolves();

    expect(delivery.execute(99999)).resolves.deep.equal('Delivery dont exist');
  });
  
  afterEach(function () {
    sinon.restore();
  });  
});
