import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
// import Events from "./pages/Events.js";
import Navbar from './components/layout/Navbar/Navbar.js';
import Wrapper from "./components/layout/Wrapper/Wrapper.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/*" component={Home} />
          <Route exact path="/Home" component={Home} />
          {/* <Route exact path="/events" component={Events} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}
export default App;
