import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema)