import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

import App from '../../index';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;
describe('Testa se dentro dos services de Delivery', () => {
    it('Registra um novo Delivery e retorna o status "200"', async () => {
      const httpResponse = await (await chai.request(app).post('/delivery/create').send({
        "client": "breno",
        "deliveryDate": "2023-02-08 17:56:01",
        "departure": "dawdwadwad",
        "destiny": "dawdwadwd"
      }))
      expect(httpResponse.status).to.be.equal(201);
    });
});
