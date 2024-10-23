import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function PostsLoading() {
    return (
        <SkeletonTheme baseColor="#fff" highlightColor="hsla(0, 100%, 0%, 0.2)" height="300px" duration={1.5} >
            <div className='post skeleton'>
                <Skeleton count={1} />
            </div>
            <div className='post skeleton'>
                <Skeleton count={1} />
            </div>
            <div className='post skeleton'>
                <Skeleton count={1} />
            </div>
        </SkeletonTheme>
    )
}

export default PostsLoading;