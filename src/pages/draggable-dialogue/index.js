import React, { useRef, useState } from "react";
import * as styles from "./index.module.css";
import Draggable from "react-draggable";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const DraggableDialogue = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "draggable-dialogue" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.projectJson;
  const draggableRef = useRef(null)

  const [expand, setExpand] = useState(false);

  return (
    <Layout
      customTitle={`${project.title} | ${siteMetadata.title}`}
      customDescription={project.description}
      customURL={`${siteMetadata.url}/${project.slug}`}
      projectMode={project.mode}
    >
      <div className={styles.page}>
        <Draggable ref={draggableRef}>
          <div
            onPointerDown={expand ? ()=>null : () => {setExpand(true)}}
            // onPointerEnter={() => {setExpand(true)}}
            // onPointerLeave={() => {setExpand(false)}}
            className={styles.outerWrapper}
            data-expand={expand}
            onBlur={expand ? () => {setExpand(false)} : ()=>null }
            tabIndex={"0"}
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
                <div className={styles.nameRow}>
                  <p>Tim Tough Cookie</p>
                  <button onPointerUp={()=>{setExpand(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
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

export default DraggableDialogue;
