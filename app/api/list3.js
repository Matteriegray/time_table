import mongoose from "mongoose"
const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    mechccycle:{
        type:Array
    },
    mechpcycle:{
        type:Array
    },
    mech3rdsem:{
        type:Array
    },
    mech4thsem:{
        type:Array
    },
    mech5thsem:{
        type:Array
    },
    mech6thsem:{
        type:Array
    },
    mech7thsem:{
        type:Array
    },
    mech8thsem:{
        type:Array
    }
    
},{timestamps:true})
export const mech = mongoose.models.mech||mongoose.model("mech",userschema)