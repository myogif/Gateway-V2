'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('log_tag_number', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true
       },
       tag_number: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
       },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      
      });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('log_tag_number');
    
  }
};
