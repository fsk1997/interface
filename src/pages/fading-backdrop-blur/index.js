import React from "react";
import * as styles from "./index.module.css";

// Non essential imports
import Layout from "../../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { projectFragment } from "../../fragments/projectFragment";

const Image = ({ imageLink, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maskOne}>
        <img
          src={imageLink}
          alt="Random Image from Online"
          width={"1000"}
          height={"800"}
        />
      </div>
      <div className={styles.maskTwo}>
        <img
          src={imageLink}
          alt="Random Image from Online"
          width={"1000"}
          height={"800"}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const FadingBackdropBlur = () => {
  const data = useStaticQuery(graphql`
    {
      pageJson(slug: { eq: "fading-backdrop-blur" }) {
        ...projectFragment
      }
    }
  `);

   const project = data.pageJson;

  return (
    <Layout
      customTitle={`${project.title} | Interface. by SayKiat`}
      customDescription={project.description}
      customURL={`https://interface.saykiat.com/${project.slug}`}
      projectMode={project.mode}
    >
      <Image
        imageLink={"https://c.tenor.com/UqzojRtY8eAAAAAd/aot-mikasa.gif"}
        title={"ミカサ・アッカーマン Mikasa Akkāman 💖"}
      />
      <Image
        imageLink={
          "https://media2.giphy.com/media/FUi94opKPNopjUmQvR/giphy.gif"
        }
        title={"Elon Musk (イーロン・マスク)"}
      />
      <Image
        imageLink={
          "https://c.tenor.com/ChfKaiA2AIMAAAAC/kinshiki-otsutsuki-sasuke-uchiha.gif"
        }
        title={"Sasuke Uchiha (うちは サスケ)"}
      />
      <Image
        imageLink={"https://c.tenor.com/YoZqAb8YA0kAAAAC/apple-tim-cook.gif"}
        title={"Tim Cook (ティム・クック)"}
      />
      <p style={{ textAlign: "center" }}>
        <b>
          Different browser handles blur different. Be sure to check out on
          other browsers too!
        </b>
      </p>
    </Layout>
  );
};

export default FadingBackdropBlur;
