import { useParams } from 'react-router-dom'
import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice'
import Posts from '../../components/Posts/Posts'
import Subreddits from '../../components/Subreddits/Subreddits'
import './Subreddit.css'
import Aside from '../../components/Aside/Aside'

function Subreddit() {
    let { subreddit } = useParams();
    console.log('ttt', subreddit)
    const { data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(subreddit)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <div className='subreddit main-container'>
                {postsSuccess &&
                <section className='main'>
                    <h2>r/{subreddit}</h2>
                    <Posts posts={posts} name='user' />
                </section>
                }
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