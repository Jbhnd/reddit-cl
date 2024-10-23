import MainContainer from '../../components/MainContainer/MainContainer.js'
import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice';
import Subreddits from '../../components/Subreddits/Subreddits'
import Posts from '../../components/Posts/Posts'
import './Home.css'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

const homeSr = 'popular'

function Home() {
    const { isLoading: postsIsLoading, data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(homeSr)
    console.log('ttttt', posts)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <h2>Home</h2>
            <div className='home main-container'>
                <section className='main'>
                    {postsIsLoading &&
                        <PostsLoading />
                    }
                    {postsSuccess &&
                        <Posts posts={posts} />
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

export default Home