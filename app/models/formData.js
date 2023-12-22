import mongoose, { Schema } from "mongoose";

const formDataSchema = new Schema(
    {
        jobName: String,
        customerName: String,
        materialIDs: String,
        materialNames: String,
        printType: String,
        printCustomerName: Boolean,
        shouldPrintCustomText: Boolean,
        printCustomText: String,
        designNotes: String
    }
);

const formData = mongoose.models.formData || mongoose.model("formData", formDataSchema);

export default formData;