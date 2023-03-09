const request = require("supertest");
const app = require("../app");

describe("My First group", () => {
  test(" sum 2+2 =4  ", () => {
      expect(2 + 2).not.toBe(5);
  })
  test('My First Test', () => {
      let x = 2;
      let y = 2;
      expect(x + y).toBe(4);
  });
})


describe("test for /", () => {
  it("testing ", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
