'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rfid_data', {
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false
       },
       reader_id: {
         type: Sequelize.STRING,
         allowNull: false
       },
       port: {
         type: Sequelize.STRING,
         allowNull: false
       },
       ip_server: {
         type: Sequelize.STRING,
         allowNull: false
       },
       api_server: {
         type: Sequelize.STRING,
         allowNull: true
       }
      });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rfid_data');
    
  }
};
