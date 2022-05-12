
module.exports = (sequelize, DataTypes) => {
    const rfid_data = sequelize.define('rfid_data', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        reader_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        port: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ip_server: {
            type: DataTypes.STRING,
            allowNull: true
        },
        api_server:{
            type: DataTypes.STRING,
            allowNull: true
        },
        mode:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt:{
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: 'rfid_data',
    });

    return rfid_data;
}