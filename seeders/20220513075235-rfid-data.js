'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
   await queryInterface.bulkInsert('rfid_data', [{
      id: 1,
      reader_id: 'uux180t',
      port: '8080',
      ip_server: 'http://151.106.112.34/',
      api_server: 'http://151.106.112.34/api/v1/test',
      api_key: 'sadih2i%219213123$$$ksadwqe',
      mode: 'UDP',
      created_at: new Date(),
      updated_at: new Date()

    }]);
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('rfid_data', null, {});
    
  }
};
