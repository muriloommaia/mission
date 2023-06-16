import "./style.css";
import MISSIONARY from "./Support/missionary";
import PROJECT from "./Support/project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { MissionPage, MissionTools, MissionLetters, BodyIndex } from "./Pages";
import { Footer, Navbar } from "./Components";

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
          <MissionLetters />
        </Route>
        <Route path="/">
          <BodyIndex />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
