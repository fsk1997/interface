import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { throttle } from "underscore";

const BottomTabNavigator = () => {
  const [dismiss, setDismiss] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);


  // Idea: https://dev.to/nadeemkhanrtm/detect-scroll-direction-reactjs-1gnp


  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(() => {
        if (window.scrollY < lastScrollTop) {
          console.log("scrolling up", window.scrollY, lastScrollTop, dismiss);
          setDismiss(false);
        } else {
          console.log("scrolling down", window.scrollY, lastScrollTop, dismiss);
          setDismiss(true);
        }
        setLastScrollTop(window.scrollY);
        //if scrolltop is less than 0, then set lastScrollTop to 0.
        //if scrolltop is more than 0, then set lastScrollTop to current scrollTop
      }, 1000)
    );
  }, [lastScrollTop]);

  return (
    <div className="page">
      <div className="page-content">
        <h1>BottomTabNavigator (Still Buggy)</h1>
        {[...Array(50)].map((index) => (
          <p key={index}>this is some content</p>
        ))}
      </div>
      <div className={`tab-container ${dismiss ? "tab-dismiss" : ""}`}>
        <div>
          <Link href="/">text 1</Link>
        </div>
        <div>
          <Link href="/">text longer text</Link>
        </div>
        <div>
          <Link href="/">text 3</Link>
        </div>
        <div>
          <Link href="/">text 4</Link>
        </div>
        <div>
          <Link href="/">text 5</Link>
        </div>
      </div>
    </div>
  );
};

export default BottomTabNavigator;
