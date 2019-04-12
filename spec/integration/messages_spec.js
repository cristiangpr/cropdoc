const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/messages";
const sequelize = require("../../src/db/models/index").sequelize;
 const Message = require("../../src/db/models").Message;

describe("routes : messages", () => {
  beforeEach((done) => {
     this.message;
     sequelize.sync({force: true}).then((res) => {

      Message.create({
        name: "John",
        content: "There is a lot of them",
        email: "dadada@dada.com",
        phone: 1234567890
      })
       .then((message) => {
         this.message = message;
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });

     });

   });

  describe("GET /messages", () => {

    it("should return a status code 200 and all messages", (done) => {

//#3
       request.get(base, (err, res, body) => {
         expect(res.statusCode).toBe(200);
         expect(err).toBeNull();
         expect(body).toContain("John");

         done();
       });
     });

     describe("GET /messages/new", () => {

  it("should render a new message form", (done) => {
    request.get(`${base}/new`, (err, res, body) => {
      expect(err).toBeNull();
      expect(body).toContain("Contact Us");
      done();
    });
  });

});
   });

   describe("POST /messages/create", () => {
     const options = {
       url: `${base}/create`,
       form: {
         name: "Jack Freestone",
         content: "I wanna cropdoc",
         email: "jack@freestone.com",
         phone: 1234567890
       }
     };

     it("should create a new message and redirect", (done) => {

//#1
       request.post(options,

//#2
         (err, res, body) => {
           Message.findOne({where: {name: "Jack Freestone"}})
           .then((message) => {
             expect(res.statusCode).toBe(303);
             expect(message.email).toBe("jack@freestone.com");
             expect(message.content).toBe("I wanna cropdoc");
             done();
           })
           .catch((err) => {
             console.log(err);
             done();
           });
         }
       );
     });
   });

   describe("GET /messages/:id", () => {

   it("should render a view with the selected message", (done) => {

     request.get(`${base}/1`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("There is a lot of them");
       done();
     });
   });

 });

  });
