import { useParams } from 'react-router-dom'
import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice'
import Posts from '../../components/Posts/Posts'
import Subreddits from '../../components/Subreddits/Subreddits'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

function Subreddit() {
    const { subreddit } = useParams();
    console.log('ttt', subreddit)
    const { isFetching: postsIsFetching, data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(subreddit)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <div className='subreddit main-container'>
                <section className='main'>
                    {postsIsFetching &&
                        <PostsLoading />
                    }
                    {postsSuccess &&
                        <>
                            <h2>r/{subreddit}</h2>
                            <Posts posts={posts} name='user' />
                        </>
                    }
                </section>
                <aside>
                    {subredditsSuccess &&
                        <Aside heading='Subreddits' subreddits={subreddits} />
                    }
                </aside>
            </div>
        </>
    )
}

export default Subreddit;