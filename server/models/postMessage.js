import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage; //exporting a mongoose model from postmsg file, later will run crud operations