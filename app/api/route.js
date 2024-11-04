import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { chemistrycycle } from "./csedepartment/c_cycle";
import { physicscycle } from "./csedepartment/p_physics";
import { thirdsem } from "./csedepartment/3rd_sem";
import { fourthsem } from "./csedepartment/4th_sem";
import { cse } from "./list";
export async function POST(req){
    const {department,sem} = await req.json();
	await mongoose.connect(process.env.DB_URL)
    if(department=="CSE"){
        if(sem==1){
            const chemistry=chemistrycycle()
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cseccycle:chemistry }, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
       else if(sem==2){
        const physics=physicscycle()
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { csepcycle:physics }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==3){
        const third=thirdsem()
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse3rdsem:third }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==4){
        const forth=fourthsem()
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse4thsem:forth }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
    }
}