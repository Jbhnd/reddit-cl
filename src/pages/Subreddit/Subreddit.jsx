import { useParams } from 'react-router-dom'
import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice'
import Posts from '../../components/Posts/Posts'
import Subreddits from '../../components/Subreddits/Subreddits'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

function Subreddit() {
    let { subreddit } = useParams();
    console.log('ttt', subreddit)
    const { isLoading: postsIsLoading, data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(subreddit)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <div className='subreddit main-container'>
                <section className='main'>
                    {postsIsLoading &&
                        <PostsLoading />
                    }
                    {postsSuccess &&
                        <>
                            <h2>r/{subreddit}</h2>
                            <Posts posts={posts} name='user' />
                        </>
                    }
                </section>
                {subredditsSuccess &&
                <aside>
                    <Aside heading='Subreddits' subreddits={subreddits} />
                </aside>
                }
            </div>
        </>
    )
}

export default Subreddit;