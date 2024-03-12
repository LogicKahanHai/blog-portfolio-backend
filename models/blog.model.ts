import mongoose from "mongoose";

const blogPartSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    teaser: {
        type: String,
        required: true,
    },
    content: {
        type: [blogPartSchema],
        default: [],
    },
    dateTime: {
        type: Date,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

