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
        } 
        if (scrollTop > lastScrollTop ) {
          setSmallerHeaderFont(smallerHeaderFont - (window.scrollY / 100));
        }    
      })
      setLastScrollTop(scrollTop < 0 ? 0 : scrollTop);
    }, 50));
  }, [null]);

  return (
    <div className="App">
      <div className="headers">
        <header className="App-header-large" 
          // style={{opacity: smallerHeaderFont,}}
        >
          <h1
            style={{
              transform: `scale(${smallerHeaderFont})`,
              transformOrigin: "top left",
            }}
          >
            Scroll me!
          </h1>
        </header>
        <header className="App-header-small" style={{transform: `translateY(-${smallerHeaderFont}00%)`}}>
          <h1>
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
