
import request from 'supertest';
import app from './app';

test('should got Arthur', done =>{

    request(app)
        .get('/')
        .expect(200, 'Hello, Arthur!')
        .end(err =>{
            if(!err) done();
            else done(err);
        });

});