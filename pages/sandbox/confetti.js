import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function AppConfetti() {
  const [follow, setFollow] = useState(false);
  const [complete, setComplete] = useState(false);

  const { width, height } = useWindowSize();

  const followButton = () => {
    setFollow(!follow);
    setComplete(!complete);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Confetti on Follow!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>React Confetti on Follow!</h2>
        {/* Follow Button */}
        {!follow ? (
          <button className={styles.button1} onClick={() => followButton()}>
            Follow
          </button>
        ) : (
          <button className={styles.button2} onClick={() => followButton()}>
            Followed
          </button>
        )}
        {/* React Confetti on complete(true) */}
        {complete && (
          <Confetti
            width={width}
            height={height}
            confettiSource={{
              w: 10,
              h: 10,
              x: width / 2,
              y: height / 2,
            }}
            recycle={false}
          />
        )}
        <span className={styles.tech}>
          Tech:{" "}
          <Link href="https://github.com/alampros/react-confetti">
            <a className={styles.link}>react-confetti</a>
          </Link>
        </span>
      </main>
    </div>
  );
}
