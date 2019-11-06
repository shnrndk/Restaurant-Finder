const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    userstatus:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
}, { collection: 'UserDetails' });

const useraccounts = module.exports = mongoose.model("useraccounts",userSchema);

module.exports = useraccounts;