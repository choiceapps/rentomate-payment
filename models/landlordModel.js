const mongoose = require("mongoose");

const landLord = new mongoose.Schema({
  userName : {
    type : String,
    required: true
},
email : {
    type : String,
    required: true
},
password : {
    type : String,
    required: true
},
ConfirmPassword : {
    type : String,
    required: true
}
});

module.exports = mongoose.model("landLord", landLord);
