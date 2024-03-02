import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
})


export default mongoose.model("Data", dataSchema)