import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function CommentsLoading() {
    return (
        <SkeletonTheme baseColor="#fff" highlightColor="hsla(0, 100%, 0%, 0.2)" duration={1.5} inline={true}>
            <div className='comment-body'>
                <Skeleton count={4} />
            </div>
        </SkeletonTheme>
    )
}

export default CommentsLoading;