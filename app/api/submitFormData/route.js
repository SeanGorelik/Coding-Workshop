import connectMongoDB from '../../libs/mongodb.js';
import formData from '../../models/formData.js';
import { NextResponse } from "next/server";

export async function POST(request){
    const {
        jobName, 
        customerName, 
        materialIDs, 
        materialNames, 
        printType, 
        printCustomerName, 
        shouldPrintCustomText,
        printCustomText, 
        designNotes
    } = await request.json();
    await connectMongoDB();
    await formData.create({
        jobName, 
        customerName, 
        materialIDs, 
        materialNames, 
        printType, 
        printCustomerName, 
        shouldPrintCustomText,
        printCustomText, 
        designNotes
    });
    return NextResponse.json({message: "Form Submitted"}, {status: 200});
}