import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import NoMatch from "./pages/NoMatch.js";
import Navbar from './components/layout/Navbar/Navbar.js';
import SideNav from './components/layout/SideNav/SideNav.js';
import Footer from './components/layout/Footer/Footer.js';
import Login from './components/layout/Login/login.js'
import Signup from './components/layout/SignUp/signup.js'
// import Header from "./components/layout/Header/Header.js";
// import Wrapper from "./components/layout/Wrapper/Wrapper.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideNav />
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route component={NoMatch} />
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}
export default App;
