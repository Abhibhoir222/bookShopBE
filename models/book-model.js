import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        book_type: {
            type: String
        },
        auther_name: {
            type: String
        },
    },
    { timestamps: true }
);

export default mongoose.model("book", bookSchema)