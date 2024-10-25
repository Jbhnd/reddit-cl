import { useGetPostCommentsQuery } from "../../api/redditApiSlice"
import "./Comments.css"
import Comment from "./Comment"
import CommentsLoading from "./CommentsLoading"

function Comments({postId}) {
    const { isLoading, data: comments, isSuccess: commentsSuccess } = useGetPostCommentsQuery(postId);
    
    return (
        <div className='comments'>
            {(isLoading) &&
                <CommentsLoading />
            }
            
            {(commentsSuccess && comments.length !== 0) &&
                comments.map((comment) => <Comment key={comment.id} comment={comment} />)
            }
        </div>)
}

export default Comments;