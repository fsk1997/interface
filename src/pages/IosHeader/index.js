import "./index.css";
import { useEffect, useState } from "react";
import { throttle } from "underscore";

function IosHeader() {
  const [smallerHeaderFont, setSmallerHeaderFont] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    var scrollTop = window.scrollY + 1; //Add one only it works
    window.addEventListener("scroll", throttle(()=>{
      requestAnimationFrame(()=>{
        if (scrollTop < lastScrollTop) {
          setSmallerHeaderFont(smallerHeaderFont + (window.scrollY / 100));
          console.log('scrolling up')
        } 
        if (scrollTop > lastScrollTop ) {
          setSmallerHeaderFont(smallerHeaderFont - (window.scrollY / 100));
          console.log('scrolling down')
        }    
      })
      setLastScrollTop(scrollTop < 0 ? 0 : scrollTop);
    }, 50));
  }, [null]);

  return (
    <div className="App">
      <div className="headers">
        <header className="App-header-large">
          <h1
            style={{
              transform: `scale(${smallerHeaderFont})`,
              opacity: smallerHeaderFont,
              transformOrigin: "top left",
            }}
          >
            Scroll me!
          </h1>
        </header>
        <header className="App-header-small"
        style={{borderBottomColor: `rgba(230,230,230,${-smallerHeaderFont+0.5})`}}
          >
          <h1
              style={{opacity: -smallerHeaderFont+0.8}}
          >
            Continue scroll me!
          </h1>
        </header>
      </div>
      <div className="content">
        {[...Array(50)].map((index) => (
          <p key={index}>this is some content</p>
        ))}
      </div>
    </div>
  );
}

export default IosHeader;
