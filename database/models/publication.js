module.exports = (sequelize, DataTypes) => {
    let alias = 'publication'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(50)
        },
        contents: {
            type: DataTypes.STRING(255)
        },
        image: {
            type: DataTypes.STRING
        }
}
    let config = {
        tableName: 'publication',
        timestamps: false
    }
    
    let publication = sequelize.define(alias, cols, config);
    

    return publication;
};  
    