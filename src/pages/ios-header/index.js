import React, { useEffect, useState } from "react";
import { throttle } from "underscore";
import * as styles from "./index.module.css";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const IosHeader = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "ios-header" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.projectJson;

  const [smallerHeaderFont, setSmallerHeaderFont] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    var scrollTop = window.scrollY + 1; //Add one only it works
    window.addEventListener(
      "scroll",
      throttle(() => {
        requestAnimationFrame(() => {
          if (scrollTop < lastScrollTop) {
            setSmallerHeaderFont(smallerHeaderFont + window.scrollY / 100);
            console.log("scrolling up");
          }
          if (scrollTop > lastScrollTop) {
            setSmallerHeaderFont(smallerHeaderFont - window.scrollY / 100);
            console.log("scrolling down");
          }
        });
        setLastScrollTop(scrollTop < 0 ? 0 : scrollTop);
      }, 50)
    );
  }, [null]);

  return (
    <Layout
      customTitle={`${project.title} | ${siteMetadata.title}`}
      customDescription={project.description}
      customURL={`${siteMetadata.url}/${project.slug}`}
      projectMode={project.mode}
    >
      <div style={{overflow:"hidden"}}>
        <div className={styles.headers}>
          <header className={styles.HeaderLarge}>
            <h1
              className={styles.h1}
              style={{
                transform: `scale(${smallerHeaderFont})`,
                opacity: smallerHeaderFont,
                transformOrigin: "top left",
              }}
            >
              Scroll me!
            </h1>
          </header>
          <header
            className={styles.HeaderSmall}
            style={{
              borderBottomColor: `rgba(230,230,230,${
                -smallerHeaderFont + 0.5
              })`, 
            }}
          >
            <h1 style={{ opacity: -smallerHeaderFont + 0.8 }}>
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
    </Layout>
  );
};

export default IosHeader;
