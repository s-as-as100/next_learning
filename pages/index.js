import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";
// flow of next js project
// control go to package json file
// entery point of next js  ---> _app.js
// index. js file  is component same imported in app .js

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data, "fetc");
  return {
    props: {
      data
    },
  };
};

export default function Home({data}) {
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
          <li className={`${styles.bn} ,${styles.mj}`}></li>
          <style jsx>
            {`
              h1 {
                color: pink;
              }
            `}
          </style>
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

      <div>
        <Image
          width="200"
          height="200"
          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></Image>
      </div>
      <div>
        <h3>fetch</h3>

        {data.slice(0,4).map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.id}</h3>
              <h2>{elem.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
