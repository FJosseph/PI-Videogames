/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
    id: 1000000,
    name: 'Pro Evolution Soccer',
    description: 'PES',
    fecha_lanzamiento: '2022-09-12',
    rating: 4,
    plataformas: [{platform:{name: 'PC'}}]
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe.skip('GET /videogames', () => {
     it('should get 200', async() =>
      await agent.get('/videogames').expect(200))
     it('Propiedad length del array debe ser igual a 101', async ()=>{
        const response = await agent.get('/videogames')
        expect(response.length).equal(101)
      })
    })    
  describe('GET /videogame/{id}', () => {
     it('should get 200', async() =>
      await agent.get('/videogame/1000000').expect(200))
    })    
     it('ID Debe ser igual a 10000000', async () =>{
      const response = await agent.get('/videogame/1000000')
      expect(response.body.id).equal(1000000) 
     })
  describe('GET /videogames?name={}', () => {
     it('should get 200', async() =>
      await agent.get('/videogames?name=pes').expect(200))
    })    
    });
