import Subreddits from '../Subreddits/Subreddits'

function Aside(props) {
    const { heading, about, subreddits, searchSubreddits } = props;
    
    return (
        <>
            <h3 className='heading'>{heading}</h3>
            {(subreddits) && <Subreddits subreddits={subreddits} />}
            
        </>)
}

export default Aside;