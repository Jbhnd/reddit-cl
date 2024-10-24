import { useState, useEffect } from 'react'
import Post from './Post.jsx'

function Posts({posts, name='sub'}) {
    return (
        <>
            {posts.map((post) => <Post key={post.id} post={post} name={name} />)}
        </>
        )
}

export default Posts