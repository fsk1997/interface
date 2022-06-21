import React from "react";
import * as styles from "./index.module.css";
import Logo from "../Logo";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectJson {
        edges {
          node {
            ...projectFragment
          }
        }
      }
    }
  `);

  const projects = data.allProjectJson.edges;

  return (
    <div className={styles.sidebar}>
      <Logo />

      <div className={styles.projectList}>
        {projects.map((project) => {
          const d = project.node;

          return (
            <Link to={`/${d.slug}`} key={d.slug}>
                {d.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
