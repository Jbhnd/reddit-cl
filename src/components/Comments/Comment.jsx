import timeDiff from "../../utils/timeDiff"
import Markdown from "react-markdown"
import Avatar from "avataaars"
import randomAvatarStyle from "../../utils/avatarStyle"

function Comment({comment}) {
    const time = timeDiff(comment.created);
    
    return (
        <div className='comment'>
            <div className='comment-details'>
                <Avatar className='comment-author icon' avatarStyle='Transparent' {...randomAvatarStyle()} />
                <span className='comment-author name'>{comment.author}</span>
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