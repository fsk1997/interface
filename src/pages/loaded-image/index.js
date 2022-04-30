import React, { useState } from "react";
import Link from "next/link";

const LoadedImage = () => {
  const [loaded, setLoaded] = useState("not-loaded");

  return (
    <div style={{textAlign:'center'}}>
      {loaded == "loaded" ? (
        <div>
            <p>Image load succesfully!</p>
            <Link href="/loaded-image">Refresh da page</Link>
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
          className={loaded}
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