const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "Firstname is required"],
        minLength:[3, "Firstname should be at least 3 characters"],
        maxLength:[20, "Firstname shouldn't be more than 20 charaters"],
        trim:true,
    },
    lastName:{
        type:String,
        required:[true, "Lastname is required"],
        minLength:[3,"Lastname should be at least 3 characters"],
        maxLength:[20,"Lastname shouldn't be more than 20 characters"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator:function(v){
                return validator.isEmail(v)
            },
            message:"Please enter valid email"
        } 
    },

    password:{
        type:String,
        required:[true,"Password is required"],
        select:false
    },

    avatar:{
        type:String,
        trim:true,
        validate:{
            validator:function(v){
                return !v || validator.isURL(v)
            },

            message:"avatar is not valid"
        }
    },

    role:{
        type:String,
        enum:{
            values:['super_admin','admin','employee'],
            message:"{VALUE} is not supported"
        },
        default:"employee"
    },

    isActive:{
        type:Boolean,
        default:true,
    },

    companyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }
},{timestamps:true})

userSchema.index({email:1})
userSchema.index({companyId:1})

const User = mongoose.model("User", userSchema)

module.exports = User