import React from "react";
import styles from "./index.module.css";

const FadingBackdropBlur = () => {
  const imageLink =
    "https://c.tenor.com/UqzojRtY8eAAAAAd/aot-mikasa.gif";

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.maskOne}>
          <img src={imageLink} alt="Mikasa Ackerman" width={"1000"} height={"800"} />
        </div>
        <div className={styles.maskTwo}>
          <img src={imageLink} alt="Mikasa Ackerman" width={"1000"} height={"800"} />
        </div>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <h1>
              <blink>
                ミカサ・アッカーマン Mikasa Akkāman 💖
              </blink>
            </h1>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        <b>
          Different browser handles blur different. Be sure to check out on
          other browsers too!
        </b>
      </p>
    </>
  );
};

export default FadingBackdropBlur;
