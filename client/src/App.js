import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar/Navbar.js";
import Search from "./components/layout/Search/Search.js";
import Grid from "./components/layout/Grid/Grid.js";
function App() {
  return (
<div>
<Navbar />
<Search />
<Grid />
</div>
  );
}

export default App;
