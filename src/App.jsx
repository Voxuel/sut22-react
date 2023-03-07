import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="grid-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contacts />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>
        <footer>(C) Krille</footer>
      </div>
    </Router>
  )
}

export default App
