const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/driverapp', {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', () => {console.log('Connection error!')});
db.once('open', () => {console.log('📦 Storage is ok! Good to go!')});

module.exports = mongoose;