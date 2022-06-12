import React from "react";
import * as styles from "./index.module.css";
import {Link} from "gatsby"

const Logo = ({style}) => {
  return (
    <Link to="/">
      <div className={styles.logo} style={{...style}}>
        <p>
          <span>Interface</span>
          <span>.</span>
        </p>
        <p>
          React CSS Experiments
          {/* by <a target="_blank" rel="noreferrer" href="https://saykiat.com">SayKiat</a> */}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
