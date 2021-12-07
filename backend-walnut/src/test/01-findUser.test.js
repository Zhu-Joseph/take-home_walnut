const request = require("supertest")
const app = require("../app")

describe ("POST /users", () => {
    beforeAll(() => {
        return knex.migrate
          .forceFreeMigrationsLock()
          .then(() => knex.migrate.rollback(null, true))
          .then(() => knex.migrate.latest());
      });
    
      beforeEach(() => {
        return knex.seed.run();
      });
    
      afterAll(async () => {
        return await knex.migrate.rollback(null, true).then(() => knex.destroy());
      });
    

    test("returns 200 and finds username", async () => {
        const data = {
            username: "John_Doe",
            password: "password"
        }

        const response = await request(app)
            .post("users")
            .set("Accept", "application/json")
            .send({data})
        console.log(response.body)
        // expect(response.body.success).toBe(true)
        expect(response.status).toBe(200)
    })
})