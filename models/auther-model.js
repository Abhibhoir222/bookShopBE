import mongoose from 'mongoose'

const autherSchema = new mongoose.Schema(
    {
        auther_name:{
            Type:String
        },
        auther_age:{
            Type: Number
        }
    },
    {timestamps: true}
);

export default mongoose.model("auther", autherSchema)