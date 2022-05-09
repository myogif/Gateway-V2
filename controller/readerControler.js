const {rfid_data} = require('../models');


exports.showReader = async (req, res) =>{
    const result = await rfid_data.findAll();

    return res.json({
        status: 'success',
        data: result
    })
}

exports.updateReader = async (req, res) =>{
    {reader, type, id_account} = req.body;

    const result = await rfid_data.update({
        reader_id: reader,
        type_reader: type,
        id_account: id_account
    });
    return res.json({
        status: 'success',
        data: result
        
    })
}