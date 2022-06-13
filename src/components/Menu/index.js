import React from "react";
import * as styles from "./index.module.css";
import Logo from "../Logo";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allPageJson {
        edges {
          node {
            created_at
            description
            github_css
            github_js
            id
            title
            slug
            mode
          }
        }
      }
    }
  `);

  const projects = data.allPageJson.edges;

  return (
    <div className={styles.sidebar}>
      <Logo />

      <div className={styles.projectList}>
        {projects.map((project) => {
          const d = project.node;

          return (
            <Link to={`/${d.slug}`} key={d.slug}>
              <div>
                <p>{d.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
