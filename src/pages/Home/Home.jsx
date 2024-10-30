import { useGetSubredditPostsQuery, useGetSubredditsQuery } from '../../api/redditApiSlice';
import Posts from '../../components/Posts/Posts'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

const homeSr = 'popular'

function Home() {
    const { isLoading: postsIsLoading, data: posts, isSuccess: postsSuccess } = useGetSubredditPostsQuery(homeSr)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSubredditsQuery()
    
    return (
        <>
            <h2>Home</h2>
            <div className='home main-container'>
                <main className='main'>
                    {postsIsLoading &&
                        <PostsLoading />
                    }
                    {postsSuccess &&
                        <Posts posts={posts} />
                    }
                </main>
                <aside>
                    {subredditsSuccess &&
                    <Aside heading='Subreddits' subreddits={subreddits} />
                    }
                </aside>
            </div>
        </>
    )
}

export default Home