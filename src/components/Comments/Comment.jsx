import logo from "../../logo.svg"
import timeDiff from "../../utils/timeDiff"
import Markdown from "react-markdown"
import Avatar from "avataaars"
import randomAvatarStyle from "../../utils/avatarStyle"

function Comment({comment}) {
    const time = timeDiff(comment.created)
    console.log('cmtt', comment)
    return (
        <div className='comment'>
            <div className='comment-details'>
                <Avatar className='author-icon' avatarStyle='Transparent' {...randomAvatarStyle()} />
                <span className='comment-author'>{comment.author}</span>
                {(time.value) ?
                    <span className='comment-time'>{[time.value, time.unit, ' ago']}</span>
                    : ''
                }
            </div>
            <div className='comment-body'>
                <Markdown>{comment.body}</Markdown>
            </div>
        </div>
    )
}

export default Comment;