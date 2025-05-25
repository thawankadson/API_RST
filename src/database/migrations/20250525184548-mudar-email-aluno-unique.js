const { Sequelize } = require("sequelize");

module.exports = {
   up: async (queryInterface, ) => queryInterface.changeColumn(
    'alunos',
     'email',
      {
        type:Sequelize.STRING,
         allowNull: false,
          unique:true }),



   down: () => {},
  };
