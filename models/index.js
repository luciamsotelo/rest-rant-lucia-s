// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// });

// module.exports.Place = require("./places");
// module.exports.Comment = require("./comment")

require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('mongo connected succesfully'))
.catch(err => console.error('mongo connection error:', err));

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')