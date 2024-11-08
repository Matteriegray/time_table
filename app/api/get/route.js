import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { cse } from "../list";
export async function GET(){
    await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    const result=await cse.findOne({ name:"CSE" })
    console.log(result);
    return NextResponse.json({result});
}