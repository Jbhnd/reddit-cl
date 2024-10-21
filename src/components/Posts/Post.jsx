import './Posts.css'
import logo from '../../logo.svg'
import { PiArrowFatUpLight, PiArrowFatDownLight } from "react-icons/pi"
import { GoComment } from "react-icons/go"
import { useState } from "react"
import Comments from "../Comments/Comments"
import timeDiff from "../../utils/timeDiff"
import Markdown from "react-markdown"
import Avatar from "avataaars"
import randomAvatarStyle from "../../utils/avatarStyle"

function Post(props) {
    const [ show, setShow ] = useState(false);
    const { subreddit_name_prefixed, title, thumbnail, sr_detail: {icon_img, header_img}, url, post_hint, secure_media, selftext, ups, id, created, num_comments, author } = props.post
    console.log('props', title, secure_media, secure_media?.reddit_video?.fallback_url)
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
        setShow((currentShow) => !currentShow);
    }
    
    const time = timeDiff(created);
    
    return (
        <div className='post'>
            <div className='subreddit-details'>
                {(props.name=='user') ?
                    (<>
                        <Avatar className='author-icon icon' avatarStyle='transparent' {...randomAvatarStyle()} />
                        <span className='subreddit-name'>{(props.name=='user') ? `u/${author}` : subreddit_name_prefixed}</span>
                    </>)
                
                :   (<>
                        <img
                            src={icon_img}
                            onError={(e) => { e.target.src = logo }}
                            alt='subreddit icon'
                            className='subreddit-img icon'
                        />
                        <span className='subreddit-name'>{subreddit_name_prefixed}</span>
                    </>)
                }
                {(time.value) ?
                    <span className='post-time'>{time.value}{time.unit} ago</span>
                    : ''
                }
            </div>
            
            <h3 className='post-title'><Markdown>{title}</Markdown></h3>
            <div className='post-text'><Markdown>{selftext}</Markdown></div>
            {(post_hint == 'link') && <a href={url} target='_blank'>{url}</a>}
            
            <div className='post-img-container'>
                {
                (secure_media?.reddit_video?.fallback_url) ? <video className='post-video' controls unmute ><source src={secure_media?.reddit_video?.fallback_url} type="video/mp4" /></video>
                : (post_hint == 'image' && (url || thumbnail)) ? <img className='post-img' src={url || thumbnail} alt='' style={{"--image-url": `url(${url || thumbnail})`}} />
                : ''
            }
            </div>
            
            <div className='interactions'>
                <span className='ups-downs'>
                    <PiArrowFatUpLight className='upvote' />
                    <span className='ups'>{ups}</span>
                    <PiArrowFatDownLight className='downvote' />
                </span>
                <span className='post-comments'>
                    <GoComment className='comments-icon' onClick={handleClick} />
                    <span className='num-comments'>{num_comments}</span>
                </span>
            </div>
            {(show) && <Comments postId={id} />}
        </div>
        )
}

export default Post