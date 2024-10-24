import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from '../pages/Home/Home'
import Subreddit from '../pages/Subreddit/Subreddit'
import Search from '../pages/Search/Search'

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>}>
    <Route path='' element={<Home />} />
    <Route path='/r/:subreddit' element={<Subreddit />} />
    <Route path='search' element={<Search />} />
  </Route>
))

function App() {
  return (<></>);
}

export default App;