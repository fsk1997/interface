import React, { useEffect, useState } from "react";
import { throttle } from "underscore";
import * as styles from "./index.module.css";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { projectFragment } from "../../fragments/projectFragment";

const IosHeader = () => {
  const data = useStaticQuery(graphql`
    {
      pageJson(slug: { eq: "loaded-image-transition" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.pageJson;

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
      customTitle={`${project.title} | Interface. by SayKiat`}
      customDescription={project.description}
      customURL={`https://interface.saykiat.com/${project.slug}`}
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
              width:"50%" //amend this to 100% in real applications
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
