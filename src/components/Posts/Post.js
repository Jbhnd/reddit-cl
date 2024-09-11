function Post(props) {
    const { subreddit_name_prefixed, title, thumbnail } = props.post
    //console.log('props', props)
    
    return (
        <div>
            <p>{subreddit_name_prefixed}<br />
            {title}</p>
            {thumbnail.startsWith('http') ? <img src={thumbnail}/> : ''}
        </div>
        )
}

export default Post