'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rfid_data', {
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true
       },
       reader_id: {
         type: Sequelize.STRING,
         allowNull: true
       },
       port: {
         type: Sequelize.STRING,
         allowNull: true
       },
       ip_server: {
         type: Sequelize.STRING,
         allowNull: true
       },
       api_server: {
         type: Sequelize.STRING,
         allowNull: true
       },
       mode:{
         type: Sequelize.STRING,
         allowNull: false
       },
       created_at:{
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at:{
         type: Sequelize.DATE,
         allowNull: false
       }
      });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rfid_data');
    
  }
};
