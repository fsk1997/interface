import React from 'react';
import { Link } from "gatsby";

const Index = () => {
  return (
    <div>
      <h1>
        Homepage
      </h1>
      <p>
        <Link to="/ios-header">iOS Header</Link>
      </p>
      <p>
        <Link to="/bottom-tab-navigator">Bottom Tab Navigator (Still Buggy)</Link>
      </p>
      <p>
        <Link to="/loaded-image">Loaded Image Transition</Link>
      </p>
      <p>
        <Link to="/fading-backdrop-blur">Fading Backdrop Blur</Link>
      </p>
      <p>
        <Link to="/sticky-header-links">Sticky Header Links</Link>
      </p>
      <p>
        <Link to="/dialog-height-transition">Dialog Height Transition</Link>
      </p>
      <br/>
      <br/>
      <br/>
      <p>
        <a target="_blank" href="https://github.com/fsk1997/react-experiment">Visit the Github Repo</a>
      </p>
    </div>
  );
}


export default Index