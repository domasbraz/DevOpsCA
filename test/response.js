describe("404 handler", function() {
  it("should return 404 for unknown routes", function(done) {
    request(app)
      .get("/error")
      .expect(404, done);
  });
});
