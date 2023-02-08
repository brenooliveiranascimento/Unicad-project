import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../index';

import { Response } from 'superagent';
import { describe, it } from 'node:test';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;
describe('Testando rotas de times', () => {
    it('Deve retornar todos os times e o status "200"', async () => {
      const httpResponse = await (await chai.request(app).post('/delivery/create')).body({
        "client": "breno",
        "deliveryDate": "2023-02-08 17:56:01",
        "departure": "dawdwadwad",
        "destiny": "dawdwadwd"
      })

      expect(httpResponse.status).to.be.equal(201);
      // expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
    });
});
