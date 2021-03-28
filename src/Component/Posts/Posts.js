import React from 'react'
import Post from './Post/Post'
import useStyles from "./Post/style"
function Posts() {
    const classes = useStyles();

    return (
        <>
        <h1>Posts</h1>
        <Post/>
        </>
      
    )
}

export default Posts;
