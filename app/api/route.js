import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { chemistrycycle } from "./csedepartment/c_cycle";
import { physicscycle } from "./csedepartment/p_physics";
import { thirdsem } from "./csedepartment/3rd_sem";
import { fourthsem } from "./csedepartment/4th_sem";
import { fifthSem } from "./csedepartment/5th_sem";
import { sixthSem } from "./csedepartment/6th_sem";
import { seventhSem } from "./csedepartment/7th_sem";
import { eighthSem } from "./csedepartment/8th_sem";
import { thirdsemeee } from "./eeedepartment/3rd_sem";
import { fourthsemeee } from "./eeedepartment/4th_sem";
import { fifthsemeee } from "./eeedepartment/5th_sem";
import { sixthSemeee } from "./eeedepartment/6th_sem";
import { seventhSemeee } from "./eeedepartment/7th_sem";
import { eigthSemeee } from "./eeedepartment/8th_sem";
import { physicscycleeee } from "./eeedepartment/p_physics";
import { chemistrycycleeee } from "./eeedepartment/c_cycle";
import { cse } from "./list1";
import { eee } from "./list2";
import { ece } from "./list4";
import { mech } from "./list3";
import { chemistrycycleece } from "./ecedepartment/c_cycle";
import { physicscycleece } from "./ecedepartment/p_physics";
import { thirdsemece } from "./ecedepartment/3rd_sem";
import { fourthsemece } from "./ecedepartment/4th_sem";
import { fifthsemece } from "./ecedepartment/5th_sem";
import { sixthSemece } from "./ecedepartment/6th_sem";
import { seventhSemece } from "./ecedepartment/7th_sem";
import { eigthSemece } from "./ecedepartment/8th_sem";
import { chemistrycyclemech } from "./mechdepartment/c_cycle";
import { physicscyclemech } from "./mechdepartment/p_physics";
import { thirdsemmech } from "./mechdepartment/3rd_sem";
import { fourthsemmech } from "./mechdepartment/4th_sem";
import { fifthsemmech } from "./mechdepartment/5th_sem";
import { sixthSemmech } from "./mechdepartment/6th_sem";
import { seventhSemmech } from "./mechdepartment/7th_sem";
import { eigthSemmech } from "./mechdepartment/8th_sem";
export async function POST(req){

    const {department,sem,data} = await req.json();
	await mongoose.connect('mongodb+srv://Toconnect:deekshi@cluster0.xpni6pr.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0')
    if(department=="ECE"){
        if(sem==1){
            const physics=physicscycleece(data.fourHourSubject,data.oneHourSubject)
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { ecepcycle:physics }, 
                { new: true, upsert: true } 
            );
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { ececcycle:"" }, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
       else if(sem==2){
        const chemistry=chemistrycycleece(data.fourHourSubject,data.oneHourSubject)
        
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ececcycle:chemistry }, 
            { new: true, upsert: true } 
        );
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ecepcycle:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==3){
        const third=thirdsemece(data.ecefour,data.eceone,data.ecefour,data.eceone)
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece3rdsem:third }, 
            { new: true, upsert: true } 
        );
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece4thsem:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==4){
        const forth=fourthsemece(data.ecefour,data.eceone,data.ecefour,data.eceone)
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==5){
        const fifth=fifthsemece(data.ecefour,data.eceone,data.ecefour,data.eceone)
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece5thsem:fifth }, 
            { new: true, upsert: true } 
        );
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece6thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
    }
    else if(sem==6){
        const sixth=sixthSemece(data.ecefour,data.ecefour)
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece6thsem:sixth}, 
            { new: true, upsert: true } 
        );
        await ece.findOneAndUpdate(
            { name:"ECE" }, 
            { ece5thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
        
        }
        else if(sem==7){
            const forth=seventhSemece(data.ecefour,data.ecefour)
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { ece7thsem:forth }, 
                { new: true, upsert: true } 
            );
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { ece8thsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
        else if(sem==8){
            const forth=eigthSemece(data.ecefour,data.ecefour)
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { eee8thsem:forth }, 
                { new: true, upsert: true } 
            );
            await ece.findOneAndUpdate(
                { name:"ECE" }, 
                { ece7rdsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
    }
    if(department=="MECH"){
        if(sem==1){
            const physics=physicscyclemech(data.fourHourSubject,data.oneHourSubject)
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mechpcycle:physics }, 
                { new: true, upsert: true } 
            );
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mechccycle:"" }, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
       else if(sem==2){
        const chemistry=chemistrycyclemech(data.fourHourSubject,data.oneHourSubject)
        
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mechccycle:chemistry }, 
            { new: true, upsert: true } 
        );
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mechpcycle:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==3){
        const third=thirdsemmech(data.mechfour,data.mechone,data.mechfour,data.mechone)
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech3rdsem:third }, 
            { new: true, upsert: true } 
        );
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech4thsem:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==4){
        const forth=fourthsemmech(data.mechfour,data.mechone,data.mechfour,data.mechone)
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==5){
        const fifth=fifthsemmech(data.eeefour,data.eeeone,data.eeefour,data.eeeone)
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech5thsem:fifth }, 
            { new: true, upsert: true } 
        );
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech6thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
    }
    else if(sem==6){
        const sixth=sixthSemmech(data.eeefour,data.eeefour)
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech6thsem:sixth}, 
            { new: true, upsert: true } 
        );
        await mech.findOneAndUpdate(
            { name:"MECH" }, 
            { mech5thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
        
        }
        else if(sem==7){
            const forth=seventhSemmech(data.eeefour,data.eeefour)
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mech7thsem:forth }, 
                { new: true, upsert: true } 
            );
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mech8thsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
        else if(sem==8){
            const forth=eigthSemmech(data.eeefour,data.eeefour)
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mech8thsem:forth }, 
                { new: true, upsert: true } 
            );
            await mech.findOneAndUpdate(
                { name:"MECH" }, 
                { mech7rdsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
    }
    if(department=="EEE"){
        if(sem==1){
            const physics=physicscycleeee(data.fourHourSubject,data.oneHourSubject)
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eeepcycle:physics }, 
                { new: true, upsert: true } 
            );
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eeeccycle:"" }, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
       else if(sem==2){
        const chemistry=chemistrycycleeee(data.fourHourSubject,data.oneHourSubject)
        
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eeeccycle:chemistry }, 
            { new: true, upsert: true } 
        );
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eeepcycle:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==3){
        const third=thirdsemeee(data.eeefour,data.eeeone,data.eeefour,data.eeeone)
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee3rdsem:third }, 
            { new: true, upsert: true } 
        );
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee4thsem:"" }, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==4){
        const forth=fourthsemeee(data.eeefour,data.eeeone,data.eeefour,data.eeeone)
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee4thsem:forth }, 
            { new: true, upsert: true } 
        );
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee3rdsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
       }
       else if(sem==5){
        const fifth=fifthsemeee(data.eeefour,data.eeeone,data.eeefour,data.eeeone)
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee5thsem:fifth }, 
            { new: true, upsert: true } 
        );
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee6thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
    }
    else if(sem==6){
        const sixth=sixthSemeee(data.eeefour,data.eeefour)
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee6thsem:sixth}, 
            { new: true, upsert: true } 
        );
        await eee.findOneAndUpdate(
            { name:"EEE" }, 
            { eee5thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
        
        }
        else if(sem==7){
            const forth=seventhSemeee(data.eeefour,data.eeefour)
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eee7thsem:forth }, 
                { new: true, upsert: true } 
            );
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eee8thsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
        else if(sem==8){
            const forth=eigthSemeee(data.eeefour,data.eeefour)
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eee8thsem:forth }, 
                { new: true, upsert: true } 
            );
            await eee.findOneAndUpdate(
                { name:"EEE" }, 
                { eee7rdsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
    }
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
        const fifth=fifthSem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse5thsem:fifth }, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse6thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
    }
    else if(sem==6){
        const sixth=sixthSem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse6thsem:sixth}, 
            { new: true, upsert: true } 
        );
        await cse.findOneAndUpdate(
            { name:"CSE" }, 
            { cse5thsem:""}, 
            { new: true, upsert: true } 
        );
        return NextResponse.json({success:true});
        
        }
        else if(sem==7){
            const forth=seventhSem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse7thsem:forth }, 
                { new: true, upsert: true } 
            );
            await cse.findOneAndUpdate(
                { name:"CSE" }, 
                { cse8thsem:""}, 
                { new: true, upsert: true } 
            );
            return NextResponse.json({success:true});
        }
        else if(sem==8){
            const forth=eighthSem(data.aimlfour,data.aimlone,data.iseone,data.isefour,data.cseone,data.csefour)
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