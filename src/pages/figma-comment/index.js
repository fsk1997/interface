import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import Draggable from "react-draggable";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { projectFragment } from "../../fragments/projectFragment";

const AnimatedGradientIcon = () => {
  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "figma-comment" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.projectJson;

  const [expand, setExpand] = useState(false);
  const draggableRef = useRef(null);

  const dragStart = e => {
    console.log(draggableRef.current.state);
    if (draggableRef.current.state.dragging) {
      if (expand == true) {
        setTimeout(() => {
          setExpand(true);
        }, 150);
      }
      if (expand == false) {
        setTimeout(() => {
          setExpand(false);
        }, 150);
      }
    }
  };


  const dragStop = e => {
    if (expand == true) {
      setTimeout(() => {
        setExpand(true);
      }, 150);
    }
    if (expand == false) {
      setTimeout(() => {
        setExpand(false);
      }, 150);
    }
  };

  return (
    <Layout
      customTitle={`${project.title} | Interface. by SayKiat`}
      customDescription={project.description}
      customURL={`https://interface.saykiat.com/${project.slug}`}
      projectMode={project.mode}
    >
      <div className={styles.page}>
        <Draggable
          onDrag={e => dragStart(e)}
          // onStop={e => dragStop(e)}
          ref={draggableRef}
        >
          <div className={styles.outerWrapper}>
            <div
              onPointerUp={() => setExpand(!expand)}
              className={`${styles.wrapper} ${expand &&
                styles.wrapperExtended}`}
              style={{ backgroundColor: "#1877F2" }}
            >
              <div className={styles.imageWrapper}>
                <img
                  draggable={false}
                  src="https://s3.amazonaws.com/brt.org/tim-cook-3.png"
                  alt="profile photo"
                />
              </div>
              <div className={styles.commentWrapper}>
                <p>Tim Tough Cookie</p>
                <p>
                  Good Morning! I'm so excited to announce our new product line
                  that is adored by fans around the world.
                </p>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </Layout>
  );
};

export default AnimatedGradientIcon;
