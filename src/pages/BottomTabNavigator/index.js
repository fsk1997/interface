import "./index.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { throttle } from "underscore";

const BottomTabNavigator = () => {
  const [dismiss, setDismiss] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(() => {
        if (window.scrollY < lastScrollTop) {
          // console.log('scrolling up', window.scrollY, lastScrollTop, dismiss)
          setDismiss(false);
        }
        if (window.scrollY > lastScrollTop) {
          // console.log('scrolling down', window.scrollY, lastScrollTop, dismiss)
          setDismiss(true);
        }
        setLastScrollTop(window.scrollY);
        //if scrolltop is less than 0, then set lastScrollTop to 0.
        //if scrolltop is more than 0, then set lastScrollTop to current scrollTop
      }, 750)
    );
  }, [lastScrollTop, dismiss]);

  return (
    <div className="page">
      <div className="page-content">
        <h1>BottomTabNavigator</h1>
        {[...Array(50)].map((index) => (
          <p key={index}>this is some content</p>
        ))}
      </div>
      <div className={`tab-container ${dismiss ? "tab-dismiss" : ""}`}>
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
};

export default BottomTabNavigator;
