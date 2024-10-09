import MainContainer from '../../components/MainContainer/MainContainer.js'
import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice';
import Subreddits from '../../components/Subreddits/Subreddits'
import Posts from '../../components/Posts/Posts'
import './Home.css'
import Aside from '../../components/Aside/Aside'

const homeSr = 'popular'

function Home() {
    const { data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(homeSr)
    console.log('ttttt', posts)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <h2>Home</h2>
            <div className='home main-container'>
                {postsSuccess &&
                <section className='main'>
                    <Posts posts={posts} />
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

export default Home