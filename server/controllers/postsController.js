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


    try {
        const post = req.body ; 
        const {
            creator,title,message,tags,selectedFile,
        } = req.body;
        const newPost = new PostMessage();
        newPost.creator = creator
        newPost.title = title
        newPost.tags = tags
        newPost.selectedFile = selectedFile.base64
     
      await newPost.save() ;


        res.status(201).json({newPost});
    } catch (error) {
        console.log(error);
        res.status(409).json({message:error.message})
    }

}

