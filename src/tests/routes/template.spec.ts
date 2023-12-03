import { describe, before, after, it } from 'mocha';
import request, { SuperAgentTest } from 'supertest';
import { expect } from 'chai';
import { initApp } from '@/app';
import * as templateQueries from '@/queries/template.queries';

let authAgent: SuperAgentTest;

describe('Template routes', async () => {
  before((done) => {
    initApp()
      .then((a) => {
        authAgent = request.agent(a);
        done();
      })
      .catch((e) => console.log('ERROR  ', e));
  });
  afterEach(templateQueries.cleanTemplates);
  describe('POST /templates', async () => {
    it('Should return a 204 status and add a template to the db', async () => {
      await authAgent.post('/templates').send({
        name: 'toto',
      });

      const createdTemplated = templateQueries.fetchTemplates({});

      expect(createdTemplated.length).to.eq(1);
      expect(createdTemplated[0]).to.have.all.keys('id', 'name');
      expect(createdTemplated[0].name).to.eq('toto');
    });
  });
  describe('GET /templates', async () => {
    before((done) => {
      templateQueries.createTemplate({ name: 'template1' });
      templateQueries.createTemplate({ name: 'template2' });
      templateQueries.createTemplate({ name: 'template3' });
      templateQueries.createTemplate({ name: 'template4' });
      done();
    });
    it('Should return a 200 status and return a list of template from the db', async () => {
      const res = await authAgent.get('/templates');

      expect(res.body.data.length).to.eq(4);
      expect(res.body.data[0]).to.have.all.keys('id', 'name');
    });
  });
});
