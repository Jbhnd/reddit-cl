import { useGetSearchPostsQuery, useGetSearchSubredditsQuery } from '../../api/redditApiSlice';
import Posts from '../../components/Posts/Posts'
import { useSearchParams } from 'react-router-dom'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

function Search() {
    const [ searchParam, setSearchParam ] = useSearchParams();
    const searchTerm = searchParam.get('q');
    
    const { isFetching: postsIsFetching, data: posts, isSuccess: postsSuccess } = useGetSearchPostsQuery(searchTerm)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSearchSubredditsQuery(searchTerm)
    
    return (
        <>
            <div className='search main-container'>
                <main className='main'>
                    {postsIsFetching &&
                        <PostsLoading />
                    }
                    {(postsSuccess && posts.length == 0) &&
                        (<>
                            <h2>{`"${searchTerm}"`}</h2>
                            `No posts match "${searchTerm}"`
                        </>
                        )
                    }
                    {(postsSuccess && posts.length !== 0) &&
                        (<>
                            <h2>{`"${searchTerm}"`}</h2>
                            <Posts posts={posts} />
                        </>)
                    }
                </main>
                
                <aside>
                    {(subredditsSuccess && subreddits.length == 0) &&
                        <h2>No subreddits match {`"${searchTerm}"`}</h2>
                    }
                    {(subredditsSuccess && subreddits.length !== 0) &&
                        <Aside heading='Subreddits' subreddits={subreddits} />
                    }
                </aside>
            </div>
        </>
    )
}

export default Search