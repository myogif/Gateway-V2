const {rfid_data} = require('../models');


exports.showReader = async (req, res) =>{
    const result = await rfid_data.findAll();

    return res.json({
        status: 'success',
        data: result
    })
}