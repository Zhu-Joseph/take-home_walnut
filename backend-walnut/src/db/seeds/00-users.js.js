
exports.seed = function(knex) {
  return knex('users').insert([
    {
      "username": "John_Doe",
      "password": "password"
    },
    {
      "username": "Jane_Doe",
      "password": "password2"
    },
    {
      "username": "example",
      "password": "password"
    }
  ]);
};
