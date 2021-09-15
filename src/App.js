import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Trips from "./components/Trips";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Use smooth scroll instead of Route for SPA */}
        <Switch>
          <Route path="/" exact component={Hero} />
        </Switch>
        <Trips />
      </Router>
    </>
  );
}

export default App;
