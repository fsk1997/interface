import React, { useState } from "react";
import styles from "./index.module.css"

const LoadedImage = () => {
  const [loaded, setLoaded] = useState("not-loaded");

  return (
    <div style={{textAlign:'center'}}>
      {loaded == "loaded" ? (
        <div>
            <p>Image load succesfully!</p>
            <a href="/loaded-image">Refresh da page</a>
            <p> </p>
        </div>
      ) : (
        <p>Loading Image...Please wait as image size can be big</p>
      )}
      <div
        style={{
          width: '100%',
          height: 300,
          overflow: "hidden",
          backgroundColor: "lightpink",
          border:"5px solid black"
        }}
      >
        <img
          style={{ objectFit: "cover", width: '100%' }}
          className={`${loaded === "not-loaded" ? styles.notLoaded : styles.loaded} + ${styles.image}`}
          src="https://source.unsplash.com/1200x400"
          onLoad={() => setLoaded("loaded")}
          width="400"
          height="400"
          alt="random image form unsplash"
        />
      </div>
    </div>
  );
};

export default LoadedImage;