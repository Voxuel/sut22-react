import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
import Main from './pages/Main'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <main>
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
