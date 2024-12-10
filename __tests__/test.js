const app = require("../server");
const request = require("supertest")(app);

test("it can respond with 200", async () => {
  const res = await request.get("/");
  expect(res.statusCode).toBe(200);
});
test("it can respond with string hello", async () => {
  const res = await request.get("/");
  expect(res.text).toBe("hello");
});
test("it can respond array", async () => {
  const res = await request.get("/api/posts");
  console.log(res.body);
  expect(res.body).toBeInstanceOf(Array);
});
