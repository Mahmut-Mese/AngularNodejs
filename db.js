const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/app2016', (err) => {
    if (!err)
        console.log('mongo db connectioned succeeced')
    else
        console.log('error in mongo db ')

});
module.exports = mongoose;