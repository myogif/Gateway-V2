module.exports = (sequelize, DataTypes) => {
  const logTagNumber = sequelize.define('log_tag_number'{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    tag_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    tableName: 'log_tag_number',
  });
  return logTagNumber;
}