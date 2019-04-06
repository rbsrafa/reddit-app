import { User } from './../../src/backend/resources/user/User';
import request from 'supertest';
import { createApp } from "../../src/backend/config/app.config";
import { describe, it } from "mocha";
import dotenv from 'dotenv';

describe('Full Integration Test\n  ---------------------', () => {
  let headers = {'x-auth-token': ''};;
  let app: any;
  let testUser: User;

  before(async () => {
    process.env.AUTH_SECRET = 'RafaelBarros:2016213';
    app = await createApp();
  });

  describe('User and Auth Controllers test', () => {

    beforeEach(() => {
      console.log();
    });

    after(() => {
      console.log();
    });

    it('HTTP POST /users should create and return a new user', (done) => {
      const newUser = {
        "firstName":"Remo",
        "lastName":"Jansen",
        "username":"rjansen",
        "email":"rjansen@gmail.com",
        "password":"password"
      };

      (async () => {
        request(app)
          .post('/api/v1/users')
          .send(newUser)
          .expect(201)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            testUser = res.body;
            done();
          });
      })();
      
    });

    it('HTTP POST /auth/login should authenticate the test user by username and password returning a token', (done) => {

      (async () => {
        request(app)
          .post('/api/v1/auth/login')
          .send({username: testUser.username, password: 'password'})
          .expect(201)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            headers['x-auth-token'] = res.body.token;
            done();
          })
      })();

    });

    it('HTTP POST /auth/login should return an error Authentication failed 401', (done) => {

      (async () => {
        request(app)
          .post('/api/v1/auth/login')
          .send({username: testUser.username, password: 'pass'})
          .expect(401)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          })
      })();

    });

    it('HTTP GET /users should return all users', (done) => {
      (async () => {
        request(app)
          .get('/api/v1/users')
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP GET /auth/user should return the authenticated user', (done) => {
      (async () => {
        request(app)
        .get('/api/v1/auth/user')
        .set(headers)
        .expect(200)
        .end((err, res) => {
          console.log(res.body);
          if(err) return done(err);
          done();
        });
      })();
    });

    it('HTTP GET /login/user should return an error 401 (token not provided)', (done) => {
      (async () => {
        request(app)
        .get('/api/v1/auth/user')
        .expect(401)
        .end((err, res) => {
          console.log(res.body);
          if(err) return done(err);
          done();
        });
      })();
    });

    it('HTTP PATCH /users/:id should update and return an user by id', (done) => {
      const updatedUser = {
        firstName: 'Mr Remo'
      };

      (async () => {
        request(app)
          .patch(`/api/v1/users/${testUser.id}`)
          .set(headers)
          .send(updatedUser)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP GET /users/:id should return an user by id', (done) => {
      (async () => {
        request(app)
          .get(`/api/v1/users/${testUser.id}`)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP GET /users/:id should return an error 404', (done) => {
      (async () => {
        request(app)
          .get(`/api/v1/users/500`)
          .expect(404)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

  });

  describe('Integragion test LinkController\n  -------------------------------', () => {
    let createdLinkId: number;
    let createdCommentId: number;
    let voteId: any;

    beforeEach(() => {
      console.log('');
    });
  
    after(() => {
      console.log();
    })
  
    it('HTTP POST /links should Create and return a new Link', (done) => {
      const link: any = {
        url: 'https://www.testing.com',
        title: 'Testing Link'
      };
  
      (async () => {
        request(app)
          .post('/api/v1/links')
          .set(headers)
          .send(link)
          .expect(201)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            createdLinkId = JSON.parse(res.text).id;
            done();
          });
      })();
  
    });
  
    it('HTTP PATCH /links/:id should update and return a link', (done) => {
      const updatedLink = {
        url: 'https://www.testing.com',
        title: 'Updated Testing Link'
      }
  
      request(app)
        .patch(`/api/v1/links/${createdLinkId}`)
        .set(headers)
        .send(updatedLink)
        .expect(200)
        .end((err, res) => {
          console.log(res.body);
          if(err) return done(err);
          done();
        });
    });
  
    it('HTTP POST /links/downvote should return 201 status', (done) => {
  
      (async () => {
        request(app)
          .post(`/api/v1/links/${createdLinkId}/downvote`)
          .set(headers)
          .expect(201)
          .end((err, res) => {
            console.log(JSON.parse(res.text));
            if(err) return done(err);
            done();
          });
      })();
  
    });

    it('HTTP GET /votes should return all votes', (done) => {
      (async () => {
        request(app)
          .get(`/api/v1/votes`)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            voteId = JSON.parse(res.text).votes[0].id;
            done();
          });
      })();
    });
  
    it('HTTP POST /links/upvote should return 201 status', (done) => {
  
      (async () => {
        request(app)
          .post(`/api/v1/links/${createdLinkId}/upvote`)
          .set(headers)
          .expect(201)
          .end((err, res) => {
            console.log(JSON.parse(res.text));
            if(err) return done(err);
            done();
          });
      })();
  
    });

    it('HTTP POST /links/upvote should return 401 status', (done) => {
  
      (async () => {
        request(app)
          .post(`/api/v1/links/${createdLinkId}/upvote`)
          .set(headers)
          .expect(401)
          .end((err, res) => {
            console.log(JSON.parse(res.text));
            if(err) return done(err);
            done();
          });
      })();
  
    });

    it('HTTP GET /votes/:id should return a vote by id', (done) => {
      (async () => {
        request(app)
          .get(`/api/v1/votes/${voteId}`)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });
  
    it('HTTP GET /links should return all links', (done) => {
   
      (async () => {
        request(app)  
          .get('/api/v1/links')
          .expect(200)
          .end((err, res) => {
            if(err) return done(err);
            console.log(JSON.parse(res.text));
            done();
          });
      })();
  
    });
  
    it('HTTP GET /links/:id should return a link by Id', (done) => {
  
      (async () => {
        request(app)  
          .get(`/api/v1/links/${createdLinkId}`)
          .expect(200)
          .end((err, res) => {
            if(err) return done(err);
            console.log(JSON.parse(res.text));
            done();
          });
      })();
  
    });

    it('HTTP POST /comments should create and return a new comment', (done) => {

      const body = {
        content: 'This is my new comment',
        linkId: createdLinkId
      };

      (async () => {
        request(app)
          .post('/api/v1/comments')
          .set(headers)
          .send(body)
          .expect(201)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            createdCommentId = JSON.parse(res.text).id;
            done();
          });
      })();

    });

    it('HTTP GET /comments should return all comments', (done) => {
      (async () => {
        request(app)  
          .get('/api/v1/comments')
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP PATCH /comments/:id should update a comment by id', (done) => {
      const updatedComment = {
        content: 'This is my updated comment.'
      };
      
      (async () => {
        request(app)
          .patch(`/api/v1/comments/${createdCommentId}`)
          .set(headers)
          .send(updatedComment)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP GET /comments/:id should return a comment by id', (done) => {
      (async () => {
        request(app)
          .get(`/api/v1/comments/${createdCommentId}`)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });

    it('HTTP DELETE /comments/:id should delete a comment by id', (done) => {
      (async () => {
        request(app)
          .delete(`/api/v1/comments/${createdCommentId}`)
          .set(headers)
          .expect(200)
          .end((err, res) => {
            console.log(res.body);
            if(err) return done(err);
            done();
          });
      })();
    });
  
    it('HTTP DELETE /links/:id should delete a link by id', (done) => {
  
      (async () => {
        request(app)
          .delete(`/api/v1/links/${createdLinkId}`)
          .set(headers)
          .expect(200)
          .end((err, res) => {
            console.log(JSON.parse(res.text));
            if(err) return done(err);
            done();
          });
      })();
  
    });

    it('Should delete an user by id', (done) => {
      (async () => {
        request(app)
          .delete(`/api/v1/users/${testUser.id}`)
          .set(headers)
          .expect(200)
          .end((err, res) => {
            console.log(res.body)
            if(err) return done(err);
            done();
          });
      })();

    });
  
  });

});


