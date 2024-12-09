import mongoose from "mongoose"
const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    ececcycle:{
        type:Array
    },
    ecepcycle:{
        type:Array
    },
    ece3rdsem:{
        type:Array
    },
    ece4thsem:{
        type:Array
    },
    ece5thsem:{
        type:Array
    },
    ece6thsem:{
        type:Array
    },
    ece7thsem:{
        type:Array
    },
    ece8thsem:{
        type:Array
    }
    
},{timestamps:true})
export const ece = mongoose.models.ece||mongoose.model("ece",userschema)