import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { cse } from "../list";
export async function GET(){
    await mongoose.connect(process.env.DB_URL)
    const result=await cse.findOne({ name:"CSE" })
    return NextResponse.json({result});
}