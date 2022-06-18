import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import Draggable from "react-draggable";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { projectFragment } from "../../fragments/projectFragment";

const DraggableDialogue = () => {
  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "draggable-dialogue" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.projectJson;

  const [expand, setExpand] = useState(false);

  const evaluateExpand = () =>{
    if (expand == true){
      setExpand(true)
    }
    if (expand == false){
      setExpand(false)
    }
  }
  const reverseEvaluateExpand = () =>{
    if (expand == true){
      setExpand(false)
    }
    if (expand == false){
      setExpand(true)
    }
  }

  return (
    <Layout
      customTitle={`${project.title} | Interface. by SayKiat`}
      customDescription={project.description}
      customURL={`https://interface.saykiat.com/${project.slug}`}
      projectMode={project.mode}
    >
      <div className={styles.page}>
        <Draggable onDrag={() =>setExpand(false)}>
          <button
            onPointerUp={() => setExpand(!expand)}
            onBlur={() => setExpand(false)}
            className={styles.outerWrapper}
            data-expand={expand}
          >
            <div className={`${styles.wrapper} ${expand && styles.wrapperExtended}`}>
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
          </button>
        </Draggable>
      </div>
    </Layout>
  );
};

export default DraggableDialogue;