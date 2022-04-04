import React from 'react'
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <h1>
          Homepage
        </h1>
        <p>
          <Link to="/ios-header">iOS Header</Link>
        </p>
        <p>
          <Link to="/bottom-tab-navigator">Bottom Tab Navigator</Link>
        </p>
      </div>
    );
}

export default Home