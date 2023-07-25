const mongoose =  require("mongoose");
const rentSchema = mongoose.Schema({
    rentCost : {
        type : String,
    },
    montOfRent : {
        type : String,
    },
    collectRent : {
        startDate: {
            type: String,
        },
        endDate: {
            type : String, 
        }
    },
    securityDeposit : {
        secAmmount : {
            type : String,
        },
        secNote : {
            type : String,
        }
    },
    protectRent : {
        protAmmount : {
            type : String,
        },
        protNote : {
            type : String,
        }
    },
    moveinCost : {
        type : Array,
    },
    relentedCost : {
        type : String,
    },
    rentID: {
        type : String
    }
}, {timestamps : true});

module.exports = mongoose.model("rentSchema", rentSchema);