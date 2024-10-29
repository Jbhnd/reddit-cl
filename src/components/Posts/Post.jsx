import './Posts.css'
import subredditIcon from '../../subredditIcon.svg'
import { PiArrowFatUpLight, PiArrowFatDownLight } from "react-icons/pi"
import { GoComment } from "react-icons/go"
import { useState, useRef, useEffect } from "react"
import Comments from "../Comments/Comments"
import timeDiff from "../../utils/timeDiff"
import Markdown from "react-markdown"
import Avatar from "avataaars"
import randomAvatarStyle from "../../utils/avatarStyle"

function Post(props) {
    const [ showComments, setShowComments ] = useState(false);
    const overflowRef = useRef(null);
    const { post, name } = props;
    /*const { subreddit_name_prefixed, title, thumbnail, sr_detail: {icon_img, header_img}, url, post_hint, secure_media, selftext, ups, id, created, num_comments, author } = props.post*/
    /*console.log('props', post, post.title, post.secure_media, post.secure_media?.reddit_video?.fallback_url)*/
    
    useEffect(() => {
        if(overflowRef.current.scrollHeight > overflowRef.current.clientHeight) {
            overflowRef.current.classList.add('overflow')
            }
        }, []);
    
    const showPostText = () => {
        overflowRef.current.classList.toggle('show');
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
        setShowComments((currentShowComments) => !currentShowComments);
    }
    
    const time = timeDiff(post.created);
    
    return (
        <div className='post'>
            <div className='post-details'>
                {(name=='user') ?
                    (<>
                        <Avatar className='post-author icon' avatarStyle='transparent' {...randomAvatarStyle()} />
                        <span className='post-author name'>{(props.name=='user') ? `u/${post.author}` : post.subreddit_name_prefixed}</span>
                    </>)
                
                :   (<>
                        <img
                            src={post.sr_detail.icon_img}
                            onError={(e) => { e.target.src = subredditIcon }}
                            alt='subreddit icon'
                            className='post-subreddit icon'
                        />
                        <span className='post-subreddit name'>{post.subreddit_name_prefixed}</span>
                    </>)
                }
                {(time.value) ?
                    <span className='post-time'>{time.value}{time.unit} ago</span>
                    : ''
                }
            </div>
            
            <h3 className='post-title'><Markdown>{post.title}</Markdown></h3>
            <div ref={overflowRef} className='post-text' onClick={showPostText}>
                <Markdown>{post.selftext}</Markdown>
            </div>
            
            {(post.post_hint == 'link') && <p className='post-linktext'><a href={post.url} target='_blank'>{post.url}</a></p>}
            
            <div className='post-img-container'>
                {
                (post.secure_media?.reddit_video?.fallback_url) ? <video className='post-video' controls ><source src={post.secure_media?.reddit_video?.fallback_url} type="video/mp4" /></video>
                : (post.post_hint == 'image' && (post.url || post.thumbnail)) ? <img className='post-img' src={post.url || post.thumbnail} alt={post.title} style={{"--image-url": `url(${post.url || post.thumbnail})`}} />
                : ''
            }
            </div>
            
            <div className='interactions'>
                <span className='ups-downs'>
                    <PiArrowFatUpLight className='upvote' />
                    <span className='ups'>{post.ups}</span>
                    <PiArrowFatDownLight className='downvote' />
                </span>
                <span className='post-comments'>
                    <GoComment className='comments-button' onClick={(e) => handleClick(e)} />
                    <span className='num-comments'>{post.num_comments}</span>
                </span>
            </div>
            {(showComments) && <Comments postId={post.id} />}
        </div>
        )
}

export default Post