import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.css"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allPageJson {
        edges {
          node {
            ...projectFragment
          }
        }
      }
    }
  `);

  const projects = data.allPageJson.edges;

  return (
    <Layout
    // customTitle={customTitle}
    // customDescription={customDescription}
    // customOgImage={customOgImage}
    // customURL={customURL}
    >
      <div className={styles.projectList}>
        {projects.map((project) => {
          const d = project.node;

          return (
            <Link to={`/${d.slug}`} key={d.slug}>
              <div>
                <h3>{d.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
