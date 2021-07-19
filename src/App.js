import BodyIndex from './Support/BodyIndex'
import Footer from './Support/Footer'
import Navbar from './Navbar'
import './style.css'
import MissionPage from './Support/MissionPage'
import MISSIONARY from './Support/missionary'
import PROJECT from './Support/project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import MissionTools from './Support/MissionTools'
import MissionCartas from './Support/lettersPage/MissionCartas'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/missoes">
          <MissionPage MISSIONARY={MISSIONARY} PROJECT={PROJECT} />
        </Route>
        <Route path="/tools">
          <MissionTools />
        </Route>
        <Route path="/letters">
          <MissionCartas />
        </Route>
        <Route path="/">
          <BodyIndex />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App