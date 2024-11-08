import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { chemistrycycle } from "./csedepartment/c_cycle";
import { physicscycle } from "./csedepartment/p_physics";
import { thirdsem } from "./csedepartment/3rd_sem";
import { fourthsem } from "./csedepartment/4th_sem";
import { cse } from "./list";
export async function POST(req){

    const {department,sem} = await req.json();
	await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    if(department=="CSE"){
        if(sem==1){
            const chemistry=chemistrycycle(data.fourHourSubject,data.oneHourSubject)
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cseccycle:chemistry }, 
                { new: true, upsert: true } 
            );
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { csepcycle:"" }, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
       else if(sem==2){
        const physics=physicscycle(data.fourHourSubject,data.oneHourSubject)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { csepcycle:physics }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cseccycle:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==3){
        const third=thirdsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse3rdsem:third }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse4thsem:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==4){
        const forth=fourthsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==5){
        const forth=fourthsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
    }
    else if(sem==6){
        const forth=fourthsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
        
        }
        else if(sem==7){
            const forth=fourthsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse4thsem:forth }, 
                { new: true, upsert: true } 
            );
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse3rdsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
        else if(sem==8){
            const forth=fourthsem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse4thsem:forth }, 
                { new: true, upsert: true } 
            );
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse3rdsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
    }
}