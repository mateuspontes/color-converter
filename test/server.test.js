var expect = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function() {
	describe("RGB to HEX conversion", function() {
		var url = "http://localhost:3000/rgbtohex?red=255&green=255&blue=255";

		it("returns status 200", function(done) {
			request(url, function(error, res, body) {
				expect(res.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in HEX", function(done) {
			request(url, function(error, res, body) {
				expect(body).to.equal("ffffff");
				done();
			});
		});
	});

	describe("HEX to RGB conversion", function() {
		var url = "http://localhost:3000/hextorgb?hex=00ff00";
		
		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in RGB", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("[0,255,0]");
				done();
			});
		});
	});
});
