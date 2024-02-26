const supertest = require("supertest");
const app = require("../app");
const utility = require("./utility");

describe("POST /api/users/register", () => {
     afterAll(async () => {
          await utility.deleteUser();
     });

     it("should register new users", async () => {
          const userData = {
               firstName: "firstNameTest",
               lastName: "lastNameTest",
               email: "emailTest@emailTest.com",
               password: "passwordTest",
          };

          const response = await supertest(app)
               .post("/api/users/register")
               .send(userData);

          expect(response.status).toBe(201);
          expect(response.body.message).toBe("User created successfully!");
          expect(response.body.success).toBe(true);
          expect(response.body.data.firstName).toBe(userData.firstName);
          expect(response.body.data.lastName).toBe(userData.lastName);
          expect(response.body.data.email).toBe(userData.email);
     });

     it("should return error when email already exist", async () => {
          const userData = {
               firstName: "firstNameTest",
               lastName: "lastNameTest",
               email: "emailTest@emailTest.com",
               password: "passwordTest",
          };

          const response = await supertest(app)
               .post("/api/users/register")
               .send(userData);

          expect(response.status).toBe(400);
          expect(response.body.message).toBe("error");
          expect(response.body.error).toBe("Email already exist");
     });

     it("should return error when email is empty", async () => {
          const userData = {
               firstName: "firstNameTest",
               lastName: "lastNameTest",
               email: "",
               password: "passwordTest",
          };

          const response = await supertest(app)
               .post("/api/users/register")
               .send(userData);

          expect(response.status).toBe(400);
          expect(response.body.message).toBe("error");
          expect(response.body.error).toBe(
               '"email" is not allowed to be empty'
          );
     });
});

describe("POST /api/users/login", () => {
     beforeEach(async () => {
          await utility.createUser();
     });
     afterEach(async () => {
          await utility.deleteUser();
     });

     it("should can login", async () => {
          const userData = {
               email: "emailTest@emailTest.com",
               password: "passwordTest",
          };

          const response = await supertest(app)
               .post("/api/users/login")
               .send(userData);

          expect(response.status).toBe(200);
          expect(response.body.message).toBe(
               "User logged in successfully!"
          );
          expect(response.body.success).toBe(true);
          expect(response.body.data).toHaveProperty("token");
     });

     it("should return error when email or password is wrong", async () => {
          const userData = {
               email: "emailTest@emailTest.com",
               password: "wrongPassword",
          };

          const response = await supertest(app)
               .post("/api/users/login")
               .send(userData);

          expect(response.status).toBe(401);
          expect(response.body.message).toBe("error");
          expect(response.body.error).toBe("Email or password is wrong");
     });
});

describe("GET /api/users/logout", () => {
     beforeEach(async () => {
          await utility.createUser();
     });
     afterEach(async () => {
          await utility.deleteUser();
     });

     it("should can logout", async () => {
          const response = await supertest(app).get("/api/users/logout");

          expect(response.status).toBe(200);
          expect(response.body.message).toBe(
               "User logged out successfully!"
          );
          expect(response.body.success).toBe(true);
     });
});
