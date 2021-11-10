const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/', {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', () => {console.log('Connection error!')});
db.once('open', () => {console.log('📦 Storage is ready! Good to go!')});

module.exports = mongoose;