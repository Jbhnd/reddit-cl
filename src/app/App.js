import logo from '../logo.svg';
import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AppLayout from './AppLayout.jsx'
import Home from '../pages/Home/Home.js'
import Main from '../components/MainContainer/MainContainer.js'
import Subreddit from '../pages/Subreddit/Subreddit.js'
import Search from '../pages/Search/Search.js'

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>}>
    <Route path='' element={<Home />} />
    <Route path='/r/:subreddit' element={<Subreddit />} />
    <Route path='search' element={<Search />} />
  </Route>
))

function App() {
  return (
    <div>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
