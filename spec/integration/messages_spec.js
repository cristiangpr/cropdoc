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
   });

  });
