import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

import App from '../../index';

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
    const httpResponse = await (await chai.request(app).get('/delivery/get'))
    expect(httpResponse.status).to.be.equal(200);
  });
});
