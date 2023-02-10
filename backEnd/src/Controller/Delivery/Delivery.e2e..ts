import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';
import DeliveryModel from '../../database/models/DeliveryModel';
import { allDeliverysMock, fulanoUnitMockWhitDestination } from '../../utils/Mocks/DeliverysMocks';
import App from '../../index';
import DeliveryPropsInterface from '../../interfaces/DeliveryPropsInterface';
import Delivery from '../../entities/Delivery/Delivery';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa se Register', () => {

    it('Registra uma nova entrega e retorna o status "200"', async () => {
      sinon.stub(DeliveryModel, 'create')
      const httpResponse = await (await chai.request(app).post('/delivery/create').send({
        "client": "Brenera",
        "destiny": "AAA",
        "deliveryDate": "2023-02-08 19:20:14",
        "departureCoordenate": "jdawiojdwiaod",
        "destinyCoordenate": "destinyCoordenateadwadwad",
        "departureName": "dawjidujwaiodwad",
        "destinyName": "jdiofawjdiowa"
      }))
      expect(httpResponse.status).to.be.equal(201);
    });
    it('Lança um erro ao tentar cirar uma entrega sem o cliente', async () => {
      const httpResponse = await (await chai.request(app).post('/delivery/create').send({
        "destiny": "AAA",
        "deliveryDate": "2023-02-08 19:20:14",
        "departureCoordenate": "jdawiojdwiaod",
        "destinyCoordenate": "destinyCoordenateadwadwad",
        "departureName": "dawjidujwaiodwad",
        "destinyName": "jdiofawjdiowa"
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
  it('Lança um erro ao enviar dados inválidos!', async () => {
    const httpResponse = await (await chai.request(app).put('/delivery/update/1')
    .send({
      "destiny": "AAA",
      "deliveryDate": "2023-02-08 19:20:14",
      "departureCoordenate": "jdawiojdwiaod",
      "departureName": "dawjidujwaiodwad",
      "destinyName": "jdiofawjdiowa"
    }));

    expect(httpResponse.status).to.be.equal(400);
  });

  it('Atualiza um Delivery com sucesso!', async () =>
  {
    sinon.stub(DeliveryModel, "update").resolves();
    const httpResponse = await (await chai.request(app).put('/delivery/update/1')
    .send({
      "client": "Brenera",
      "destiny": "AAA",
      "deliveryDate": "2023-02-08 19:20:14",
      "departureCoordenate": "jdawiojdwiaod",
      "destinyCoordenate": "destinyCoordenateadwadwad",
      "departureName": "dawjidujwaiodwad",
      "destinyName": "jdiofawjdiowa"
    }));
    expect(httpResponse.status).to.be.equal(200);
  });
});