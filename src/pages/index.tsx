import React, { createRef, useState, RefObject } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import styles from "../styles/Home.module.css";
import certificate from "./certificate.png";

const App = () => {
  const certificateWrapper: RefObject<HTMLDivElement> = createRef();
  const [name, setName] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDownload = () => {
    exportComponentAsPNG(certificateWrapper, { fileName: `${name}_certificate` });
  };

  return (
    <div className={styles.App}>
      <div className={styles.Meta}>
        <h1>Certificate Generator</h1>
        <p>Please enter your name.</p>
        <input
          type="text"
          placeholder="Please enter your name..."
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={handleDownload}>Download</button>
      </div>

      <div className={styles.certificateWrapper} ref={certificateWrapper}>
        <div id="certificateWrapper">
          <div className={styles.NameDiv}>
            <p className={styles.p}>{name}</p>
          </div>
          <img
            src={certificate.src}
            alt="Certificate"
            width={600}
            height={700}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
