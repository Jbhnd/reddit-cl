import './Posts.css'
import logo from '../../logo.svg'
import { PiArrowFatUpLight, PiArrowFatDownLight } from "react-icons/pi"
import { GoComment } from "react-icons/go"

function Post(props) {
    const { subreddit_name_prefixed, title, thumbnail, sr_detail: {icon_img, header_img}, url, post_hint, secure_media, selftext, ups } = props.post
    console.log('props', title, secure_media, secure_media?.reddit_video?.fallback_url)
    
    return (
        <div className='post'>
            <div className='subreddit-details'>
                <img
                    src={icon_img}
                    onError={(e) => { e.target.src = logo }}
                    alt='subreddit icon'
                    className='subreddit-img icon'
                    height='30px' width='30px'
                />
                <span className='subreddit-name'>{subreddit_name_prefixed}</span>
            </div>
            
            <h3 className='post-title'>{title}</h3>
            <p className='post-text'>{selftext}</p>
            {(post_hint == 'link') && <a href={url} target='_blank'>{url}</a>}
            
            <div className='post-img-container'>
                {
                (secure_media?.reddit_video?.fallback_url) ? <video className='post-video' controls unmute ><source src={secure_media?.reddit_video?.fallback_url} type="video/mp4" /></video>
                : (post_hint == 'image' && (url || thumbnail)) ? <img className='post-img' src={url || thumbnail} alt='' style={{"--image-url": `url(${url || thumbnail})`}} />
                : ''
            }
            </div>
            
            <div className='interactions'>
                <div className='ups-downs'>
                    <PiArrowFatUpLight className='upvote' />
                    <span className='ups'>{ups}</span>
                    <PiArrowFatDownLight className='downvote' />
                </div>
                <GoComment className='comments-icon' />
            </div>
        </div>
        )
}

export default Post