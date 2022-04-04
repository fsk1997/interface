import React from 'react'
import Header from "./pages/IosHeader"
import Home from "./pages/Home"
import BottomTabNavigator from "./pages/BottomTabNavigator"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  const App = () => {
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/ios-header"  element={<Header/>} exact />
          <Route path="/bottom-tab-navigator"  element={<BottomTabNavigator/>} exact />
        </Routes>
      </Router>
    );
}

export default App