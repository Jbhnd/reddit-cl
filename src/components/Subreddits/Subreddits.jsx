import { useGetSubredditsQuery } from '../../api/redditApiSlice'
import './Subreddits.css'
import { Link } from 'react-router-dom'
import subredditIcon from '../../subredditIcon.svg'

const numberFormat = new Intl.NumberFormat()

function Subreddits({subreddits}) {
    /*console.log('nnnnn', subreddits)/*const { data: subreddits, isSuccess } = useGetSubredditsQuery()*/
    
    return (
        <ul>
            {subreddits.map((subreddit) => (
                <li key={subreddit.id} className='sr'>
                    <Link to={`/${subreddit.display_name_prefixed}`}>
                        <figure className='sr-figure'>
                            <img src={subreddit.icon_img || subredditIcon}
                                className='icon'
                                onError={(e) => { e.target.src = subredditIcon }}
                                alt='subreddit icon'
                            />
                            <figcaption className='sr-detail'>
                                {subreddit.display_name_prefixed}<br/>
                                <span className='sr-detail2'>{numberFormat.format(subreddit.subscribers)} members</span>
                            </figcaption>
                        </figure>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Subreddits;