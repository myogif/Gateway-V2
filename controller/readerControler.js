const {rfid_data} = require('../models');
const deviceController = require('../controller/deviceController');


exports.showReader = async (req, res) =>{
    const result = await rfid_data.findAll();

    return res.json({
        status: 'success',
        data: result
    })
}

exports.UDP = async (req, res) =>{
    const {reader, port, ip_server} = req.body;
    //const id = rfid_data.findByPk(1);
    const updated = await rfid_data.update({
        reader_id: reader,
        mode: 'UDP',
        port: port,
        ip_server: ip_server
        }, {where : {id: 1}}
    );

    //data = await rfid_data.findAll();
    const result = await deviceController.infoDevice();
    res.render('pages/index', {result : result});
    // return res.json({
    //     status: 'success',
    //     data: data
    // })
}


exports.API = async (req, res) =>{
    const {api_server, api_key} = req.body;
    const updated = await rfid_data.update({
        mode: 'api',
        api_server: api_server,
        api_key: api_key
        }, {where : {id: 1}}
    );
    const result = await deviceController.infoDevice();
    res.render('pages/index', {result : result});

}


exports.ALARM = async (req, res) =>{
    const {api_server, api_key} = req.body;
    const updated = await rfid_data.update({
        mode: 'alarm',
        api_server: api_server,
        api_key: api_key
        }, {where : {id: 1}}
    );

    const result = await deviceController.infoDevice();
    res.render('pages/index', {result : result});
}