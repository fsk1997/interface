import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { throttle } from "underscore";
import * as styles from "./index.module.css";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { projectFragment } from "../../fragments/projectFragment";

const BottomTabNavigator = () => {
  const data = useStaticQuery(graphql`
    {
      pageJson(slug: { eq: "loaded-image-transition" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.pageJson;

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
    <Layout
      customTitle={`${project.title} | Interface. by SayKiat`}
      customDescription={project.description}
      customURL={`https://interface.saykiat.com/${project.slug}`}
      projectMode={project.mode}
    >
        <div className={styles.page}>
          <div className="page-content">
            <h1>BottomTabNavigator (Still Buggy)</h1>
            {[...Array(50)].map((index) => (
              <p key={index}>this is some content</p>
            ))}
          </div>
          <div
            className={`${styles.tabContainer} ${
              dismiss ? styles.tabDismiss : null
            }`}
          >
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
    </Layout>
  );
};

export default BottomTabNavigator;
