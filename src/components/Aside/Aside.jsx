import Subreddits from '../Subreddits/Subreddits'

function Aside(props) {
    const { heading, about, subreddits, searchSubreddits } = props;
    console.log('nnnsr', props, subreddits, searchSubreddits)
    
    return (
        <>
            <h3>{heading.toUpperCase()}</h3>
            {(subreddits) && <Subreddits subreddits={subreddits} />}
            
        </>)
}

export default Aside;