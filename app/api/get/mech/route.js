import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mech } from "../../list3";
export async function GET(){
    await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    const result=await mech.findOne({ name:"MECH" })
    console.log(result);
    
    return NextResponse.json({result});
}