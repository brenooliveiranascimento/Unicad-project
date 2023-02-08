import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';
import DeliveryModel from '../../database/models/DeliveryModel';
import { allDeliverysMock } from '../../utils/Mocks/DeliverysMocks';
import App from '../../index';
import DeliveryPropsInterface from '../../interfaces/DeliveryPropsInterface';
import Delivery from '../../entities/Delivery/Delivery';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa se Register', () => {

    it('Registra uma nova entrega e retorna o status "200"', async () => {
      const httpResponse = await (await chai.request(app).post('/delivery/create').send({
        "client": "breno",
        "deliveryDate": "2023-02-08 17:56:01",
        "departure": "dawdwadwad",
        "destiny": "dawdwadwd"
      }))
      expect(httpResponse.status).to.be.equal(201);
    });
    it('Lança um erro ao tentar cirar uma entrega sem o cliente', async () => {
      const httpResponse = await (await chai.request(app).post('/delivery/create').send({
        "deliveryDate": "2023-02-08 17:56:01",
        "departure": "dawdwadwad",
        "destiny": "dawdwadwd"
      }))
      expect(httpResponse.status).to.be.equal(400);
    });
});

describe('Testa se Get', () => {
  it('Retorna todos as entregas criada', async () => {
    sinon.stub(DeliveryModel, "findAll").resolves(allDeliverysMock as DeliveryModel[]);
    const httpResponse = await (await chai.request(app).get('/delivery/get'))

    expect(httpResponse.status).to.be.equal(200);
  });
});

describe('Testa se Update', () => {
  it('Atualiza a entrega por meio do id', async () => {
    sinon.stub(DeliveryModel, "findAll").resolves(allDeliverysMock as DeliveryModel[]);
    const httpResponse = await (await chai.request(app).put('/delivery/update/1')
    .send({
      client: 'Fulano de tal',
      destination: 'coordenada-x',
      destiny: 'coordenada-x',
    }));

    expect(httpResponse.status).to.be.equal(200);
  });
});
