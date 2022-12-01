module.exports = (sequelize, DataTypes) => {
    let alias = 'users'
    let cols = {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        }

}
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let users = sequelize.define(alias, cols, config);
    
    return users;
};  
    