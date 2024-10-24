import MainContainer from '../../components/MainContainer/MainContainer.js'
import { useGetSearchPostsQuery, useGetSearchSubredditsQuery } from '../../api/redditApiSlice';
import Subreddits from '../../components/Subreddits/Subreddits'
import Posts from '../../components/Posts/Posts'
import { useSearchParams } from 'react-router-dom'
import './Search.css'
import Aside from '../../components/Aside/Aside'
import PostsLoading from '../../components/Posts/PostsLoading'

function Search() {
    const [ searchParam, setSearchParam ] = useSearchParams();
    const searchTerm = searchParam.get('q');
    
    const { isFetching: postsIsFetching, data: posts, isSuccess: postsSuccess } = useGetSearchPostsQuery(searchTerm)
    console.log('tttttsrcg', posts, searchTerm)
    const { data: subreddits, isSuccess: subredditsSuccess } = useGetSearchSubredditsQuery(searchTerm)
    
    return (
        <>
            <div className='search main-container'>
                <section className='main'>
                    {postsIsFetching &&
                        <PostsLoading />
                    }
                    {postsSuccess &&
                        <>
                            <h2>{`"${searchTerm}"`}</h2>
                            <Posts posts={posts} />
                        </>
                    }
                </section>
                {(subredditsSuccess && subreddits.length == 0) &&
                <aside>
                    <h2>No subreddits match {`"${searchTerm}"`}</h2>
                </aside>
                }
                {(subredditsSuccess && subreddits.length !== 0) &&
                <aside>
                    <Aside heading='Subreddits' subreddits={subreddits} />
                </aside>
                }
            </div>
        </>
    )
}

export default Search