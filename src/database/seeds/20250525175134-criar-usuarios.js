const bcryptjs = require('bcryptjs')
module.exports = {
   up: async (queryInterface, ) => queryInterface.bulkInsert(
      'users', [
      {
        nome: 'Thawan',
        email:'tknunes@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Karen',
        email:'karen@gmail.com',
        password_hash: await bcryptjs.hash('25869', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Teste',
        email:'teste1@gmail.com',
        password_hash: await bcryptjs.hash('147852', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
     {},
    ),

   down: () => {},
  };
