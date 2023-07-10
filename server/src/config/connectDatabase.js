const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('goodmarket', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    login: false
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connectDatabase