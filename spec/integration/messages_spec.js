const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/messages";

describe("routes : messages", () => {

  describe("GET /messages", () => {

    it("should return a status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

  });
});
