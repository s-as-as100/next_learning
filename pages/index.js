import Head from "next/head";
import Image from "next/image";
 import Link from "next/link";
 import styles from '../styles/index.module.css';
// flow of next js project
// control go to package json file
// entery point of next js  ---> _app.js
// index. js file  is component same imported in app .js

export default function Home() {
  const styles = {
    navcont: {
      display: "flex",
      backgroundColor: "red",
    },

    ulList: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
  };

  return (
    <>
      <nav style={styles.navcont}>
        <ul style={styles.ulList}>
          {/* multiple classname */}
          <li  className={`${styles.bn} ,${styles.mj}`}></li>
          <Link href="/">
            <a> Home </a>
          </Link>
          <Link href="/About">
            <a> About</a>
          </Link>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link
            href="/Product"
            style={{
              marginRight: "20px",
            }}
          >
            <a> Product</a>
          </Link>
        </ul>
      </nav>
    </>
  );
}
