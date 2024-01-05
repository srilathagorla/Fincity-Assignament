import {Route, Switch} from 'react-router-dom'
import './App.css'
import Headers from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => (
  <>
    <div className="container">
      <Headers />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contacts" component={Contact} />
      </Switch>
    </div>
  </>
)

export default App
