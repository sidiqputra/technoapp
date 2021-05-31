var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../index.js");
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:5000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });
});