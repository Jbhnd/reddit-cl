import Posts from '../Posts/Posts'
import Subreddits from '../Subreddits/Subreddits'

function MainContainer() {
    return (
        <>
            <main>
                <Posts />
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}

export default MainContainer;