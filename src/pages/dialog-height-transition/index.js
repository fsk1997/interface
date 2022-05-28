import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

const DialogHeightTransition = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [switchContent, setSwitchContent] = useState(false);
  const dialogEl = useRef(0);
  const [changeDialogHeight, setChangeDialogHeight] = useState("100%");
  const [zeroOpacity, setZeroOpacity] = useState(false);
  const [transform, setTranform] = useState(false);

  const falsey = () => {
    setSwitchContent(false);
    setZeroOpacity(true);
    setTranform(true);
    setTimeout(function() {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  };
  const truey = () => {
    setSwitchContent(true);
    setZeroOpacity(true);
    setTranform(true);
    setTimeout(function() {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  };

  useEffect(() => {
    setTimeout(function() {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setZeroOpacity(false);
      setTranform(false);
    }, 300);
  }, [zeroOpacity]);

  return (
    <div className={styles.page}>
      {showDialog ? (
        <div className={styles.dialog} ref={dialogEl}>
          <div
            className={styles.dialogBackground}
            style={{ height: changeDialogHeight ? changeDialogHeight : "100%" }}
          ></div>
          <div className={styles.dialogInner}>
            <div className={styles.dialogNav}>
              <div className={styles.toggles}>
                <button onClick={falsey}>Square Photo</button>
                <button onClick={truey}>Rectangle Photo</button>
              </div>
              <button onClick={() => setShowDialog(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </button>
            </div>
            <div className={styles.content}>
              <div>
                <img
                  style={{
                    opacity: `${zeroOpacity ? "0%" : "100%"}`,
                    transform: `${transform ? "scale(0%)" : "scale(100%)"}`
                  }}
                  src={
                    switchContent
                      ? `https://kpopping.com/documents/49/1/2048/211226-TWICE-4th-World-Tour-Jihyo-documents-1.jpeg?v=40198`
                      : `https://i.pinimg.com/474x/a0/24/49/a02449e5de944ee726d431256940a462.jpg`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setShowDialog(true)}>Click for Jihyo!</button>
      )}
    </div>
  );
};

export default DialogHeightTransition;
