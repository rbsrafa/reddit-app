// import { LinkController } from '../../src/backend/resources/link/linkController';
// import { LinkService } from '../../src/backend/resources/link/linkService';
// import { Link } from '../../src/backend/resources/link/Link';
// import { describe } from "mocha";
// import { expect } from 'chai';
// import { User } from '../../src/backend/resources/user/User';
// import { AuthService } from '../../src/backend/auth/authService';
// import { VoteService } from '../../src/backend/resources/vote/voteService';
// import { results } from 'inversify-express-utils';
// import { CoverImage } from '../../src/backend/resources/image/coverImage/CoverImage';
// import { object } from 'joi';

// console.log('');
// describe('Unit test Link Controller\n  ------------------------', () => {
//   // Declare a LinkController
//   let linkController: LinkController;
//   // Declare a fake user
//   let fakeUser: User;
//   // Declare a fake link
//   let fakeLinks: Link[];
//   // Declare a fake LinkRepository
//   let fakeLinkRepository: any;
//   // Declare a fake UserRepository
//   let fakeUserRepository: any;
//   // Declare a fake VoteRepository
//   let fakeVoteRepository: any;
//   // Declare a fake headers
//   let fakeHeaders: any;

//   // TESTS //

//   beforeEach(() => {
//     console.log('');
//     //Create a fake user
//     fakeUser = new User('Fake', 'User', 'fakeUser', 'fakeUser@gmail.com', 'pass');
//     fakeUser.id = 2;
//     // Create fake links
//     fakeLinks = [
//       {
//         id: 1,
//         url: 'http://www.test.com',
//         title: 'Test Link', 
//         user: fakeUser,
//         createdAt: new Date,
//         updatedAt: new Date, 
//         votes: [], 
//         comments: []
//       }, 
//       {
//         id: 2,
//         url: 'http://www.test2.com',
//         title: 'Test Link 2', 
//         user: fakeUser,
//         createdAt: new Date,
//         updatedAt: new Date, 
//         votes: [], 
//         comments: []
//       }
//     ]
//     // Create fakeHeaders
//     // fake token has an id = 2
//     fakeHeaders = {
//       "x-auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQ3NzQwODUzfQ.6zTLIgoQanM9TivqE_1nJh__QPfYRYsaRIqPm9nsyqA'
//     }
//     // Create a fake LinkRepository with a findOne function
//     fakeLinkRepository = {
//       findOne: (id: number) => {
//         expect(id).to.eq(fakeLinks[0].id);
//         return Promise.resolve(fakeLinks[0]);
//       },
//       find: () => {
//         return Promise.resolve(fakeLinks);
//       },
//       save: (link: Link) => {
//         return Promise.resolve(link);
//       },
//       remove: (link: Link) => {
//         expect(link.id).to.eq(fakeLinks[0].id);
//         return Promise.resolve(fakeLinks[0]);
//       }

//     }
//     // Create a fake AuthRepository
//     fakeUserRepository = {
//       findOne: (userId: number) => {
//         expect(fakeUser.id).to.eq(userId);
//         return fakeUser;
//       }
//     };
//     // Create a fake VoteRepository
//     fakeVoteRepository = {};
//     // Create a LinkController
//     linkController = new LinkController(
//       new LinkService(fakeLinkRepository), 
//       new AuthService(fakeUserRepository), 
//       new VoteService(fakeVoteRepository)
//     );

//   });

//   it('Should be able to create a new link', async () => {
//     // Create a mock body
//     const body: any = {
//       url: 'http://www.test3.com',
//       title: 'Test Link 3'
//     }
    
//     // Test the createLink function on LinkController
//     const testLink = await linkController.createLink(body, fakeHeaders);
//     expect(testLink).to.be.an.instanceof(results.JsonResult);
//     expect(testLink.statusCode).to.eq(201);
//     // Print the created link on terminal
//     console.log(testLink);
//   });

//   it('Should be able to get all links', async () => {
//     // Test the getLinkById function on LinkController
//     const testLink = await linkController.getAllLinks();
//     expect(testLink.statusCode).to.eq(200);
//     // Print the returned link on terminal
//     console.log(testLink);
//   });

//   it('Should be able to get a link by Id', async () => {
//     // Test the getLinkById function on LinkController
//     const testLink = await linkController.getLinkById(1);
//     expect(testLink.json.id).to.eq(1);
//     expect(testLink.statusCode).to.eq(200);
//     // Print the returned link on terminal
//     console.log(testLink);
//   });

//   it('Should be able to update a link by id', async () => {
//     const fakeBody = {
//       "url": "http://www.testing19.com",
//       "title": "Updated Link 19"
//     }
//     // Test the updateLink function on LinkController
//     const testLink = await linkController.updateLink(1, fakeBody, fakeHeaders);
//     expect(testLink.json.url).to.eq(fakeBody.url, 'bla');
//     expect(testLink.statusCode).to.eq(200);
//     console.log(testLink);
//   });
//   // Test the delete link by id function on LinkController
//   it('Should be able to delete a link by id', async () => {
//     const id = 1;
//     const testLink = await linkController.deleteLink(id, fakeHeaders);
//     expect(testLink).to.be.instanceof(results.JsonResult);
//     expect(testLink.statusCode).to.eq(200);
//     console.log(testLink);
//   });

// });