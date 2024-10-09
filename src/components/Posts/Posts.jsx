import { useState, useEffect } from 'react'
import Post from './Post.jsx'

/*const fetchPosts = () => {
    return fetch('https://www.reddit.com/r/popular.json')
    .then((n) => n.json())
    .then((n) => {
        console.log("arr")
        console.log("arrss", n)
        return n.data.children.map(post => ({
            id: post.data.id,
            subreddit: post.data.subreddit,
            subreddit_id: post.data.subreddit_id,
            subreddit_name_prefixed: post.data.subreddit_name_prefixed,
            author: post.data.author,
            title: post.data.title,
            thumbnail: post.data.thumbnail,
            selftext: post.data.selftext,
            ups: post.data.ups,
            downs: post.data.downs,
            num_comments: post.data.num_comments,
            total_awards_received: post.data.total_awards_received
        }))
    })
}*/

function Posts({posts}) {
    console.log('ttttsearch', posts)/*const [ posts, setPosts ] = useState([])
    
    useEffect(() => {
        fetchPosts().then((posts) => setPosts(posts))
        console.log('1effectposts', posts)
    }, [])
    console.log('2effectposts', posts)*/
    return (
        <>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </>
        )
}

export default Posts