import mongoose from "mongoose"
const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    eeeccycle:{
        type:Array
    },
    eeepcycle:{
        type:Array
    },
    eee3rdsem:{
        type:Array
    },
    eee4thsem:{
        type:Array
    },
    eee5thsem:{
        type:Array
    },
    eee6thsem:{
        type:Array
    },
    eee7thsem:{
        type:Array
    },
    eee8thsem:{
        type:Array
    }
    
},{timestamps:true})
export const eee = mongoose.models.eee||mongoose.model("eee",userschema)