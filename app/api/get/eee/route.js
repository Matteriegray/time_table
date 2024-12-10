import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { eee } from "../../list2";
export async function GET(){
    await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    const result=await eee.findOne({ name:"EEE" })
    return NextResponse.json({result});
}