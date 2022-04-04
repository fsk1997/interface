import "./index.css";
import { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";

const BottomTabNavigator = () => {
return (
  <div className="page">
    <div className="page-content">
      <h1>BottomTabNavigator</h1>
      {[...Array(50)].map(index => (
        <p key={index}>this is some content</p>
      ))}
    </div>
    <div className="tab-container">
      <div>
        <Link to="/">text 1</Link>
      </div>
      <div>
        <Link to="/">text longer text</Link>
      </div>
      <div>
        <Link to="/">text 3</Link>
      </div>
      <div>
        <Link to="/">text 4</Link>
      </div>
      <div>
        <Link to="/">text 5</Link>
      </div>
    </div>
  </div>
);
}

export default BottomTabNavigator