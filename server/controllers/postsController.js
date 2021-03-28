import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"

export const getPosts = async(req,res) => {
        try {
            const postMessage = await PostMessage.find();
            res.status(201).json(postMessage)
        } catch (error) {
            res.status(409).json({message:error.message})
        }
}
export const createPosts = async(req,res) => {
    // console.log("hello");
    const post = req.body ; 

    const newPost = new PostMessage(post);

    try {
        await newPost.save() ;

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}

