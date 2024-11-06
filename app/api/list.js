import mongoose from "mongoose"
const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    cseccycle:{
        type:Array
    },
    csepcycle:{
        type:Array
    },
    cse3rdsem:{
        type:Array
    },
    cse4thsem:{
        type:Array
    },
    cse5thsem:{
        type:Array
    },
    cse6thsem:{
        type:Array
    },
    cse7thsem:{
        type:Array
    },
    cse8thsem:{
        type:Array
    }
    
},{timestamps:true})
export const cse = mongoose.models.cse||mongoose.model("cse",userschema)