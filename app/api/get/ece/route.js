import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ece } from "../../list4";
export async function GET(){
    await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    const result=await ece.findOne({ name:"ECE" })
    return NextResponse.json({result});
}