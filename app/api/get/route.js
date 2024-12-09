import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { cse } from "../list1";
export async function GET(){
    await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    const result=await cse.findOne({ name:"CSE" })
    return NextResponse.json({result});
}