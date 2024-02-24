const supertest = require("supertest");
const app = require("../app");
const utility = require("./utility");

describe("POST api/users/information", () => {
     beforeEach(async () => {
          await utility.createUser();
     });
     afterEach(async () => {
          await utility.deleteInformation();
          await utility.deleteUser();
     });

     it("should can create information", async () => {
          const userToken = await utility.getUserToken();
          const data = {
               noHp: "081234567890",
               address: "addressTest",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .post("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(201);
          expect(response.body.message).toBe(
               "Information created successfully!"
          );
          expect(response.body.success).toBe(true);
          expect(response.body.data.noHp).toBe("081234567890");
          expect(response.body.data.address).toBe("addressTest");
          expect(response.body.data.birthday).toBe(
               "2000-01-01T00:00:00.000Z"
          );
     });

     it("should return error when token is wrong", async () => {
          const userToken = "wrongToken";
          const data = {
               noHp: "081234567890",
               address: "addressTest",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .post("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(401);
          expect(response.error).toBeDefined();
          expect(response.error.text).toBe("Unauthorized");
     });

     it("should return error when data is empty", async () => {
          const userToken = await utility.getUserToken();
          const data = {
               noHp: "081234567890",
               address: "",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .post("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(400);
          expect(response.body.message).toBe("error");
          expect(response.body.error).toBe(
               '"address" is not allowed to be empty'
          );
     });
});

describe("GET api/users/information", () => {
     beforeEach(async () => {
          await utility.createUser();
          await utility.createInformation();
     });
     afterEach(async () => {
          await utility.deleteInformation();
          await utility.deleteUser();
     });

     it("should can get information", async () => {
          const userToken = await utility.getUserToken();

          const response = await supertest(app)
               .get("/api/users/information")
               .set("Authorization", userToken);

          expect(response.status).toBe(200);
          expect(response.body.message).toBe("Information found!");
          expect(response.body.success).toBe(true);
          expect(response.body.data.noHp).toBe("081234567890");
          expect(response.body.data.address).toBe("addressTest");
          expect(response.body.data.birthday).toBe(
               "2000-01-01T00:00:00.000Z"
          );
     });

     it("should return error when token is wrong", async () => {
          const userToken = "wrongToken";

          const response = await supertest(app)
               .get("/api/users/information")
               .set("Authorization", userToken);

          expect(response.status).toBe(401);
          expect(response.error).toBeDefined();
          expect(response.error.text).toBe("Unauthorized");
     });
});

describe("PUT api/users/information", () => {
     beforeEach(async () => {
          await utility.createUser();
          await utility.createInformation();
     });
     afterEach(async () => {
          await utility.deleteInformation();
          await utility.deleteUser();
     });

     it("should can update information", async () => {
          const userToken = await utility.getUserToken();
          const data = {
               noHp: "081234567890",
               address: "update addressTest",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .put("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(200);
          expect(response.body.message).toBe(
               "Information updated successfully!"
          );
          expect(response.body.success).toBe(true);
          expect(response.body.data.noHp).toBe("081234567890");
          expect(response.body.data.address).toBe("update addressTest");
          expect(response.body.data.birthday).toBe(
               "2000-01-01T00:00:00.000Z"
          );
     });

     it("should return error when token is wrong", async () => {
          const userToken = "wrongToken";
          const data = {
               noHp: "081234567890",
               address: "update addressTest",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .put("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(401);
          expect(response.error).toBeDefined();
          expect(response.error.text).toBe("Unauthorized");
     });

     it("should return error when data is empty", async () => {
          const userToken = await utility.getUserToken();
          const data = {
               noHp: "",
               address: "update addressTest",
               birthday: "2000-01-01",
          };

          const response = await supertest(app)
               .put("/api/users/information")
               .set("Authorization", userToken)
               .send(data);

          expect(response.status).toBe(400);
          expect(response.body.message).toBe("error");
          expect(response.body.error).toBe(
               '"noHp" is not allowed to be empty'
          );
     });
});
