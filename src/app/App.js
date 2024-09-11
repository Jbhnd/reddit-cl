import logo from '../logo.svg';
import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AppLayout from './AppLayout.js'
import Home from '../pages/Homepage/Home.js'
import Main from '../components/Main/Main.js'

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>}>
    <Route path='' element={<Home />} />
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
