import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Image
        src='/background.png'
        width={1200}
        height={700}
        alt='background'
        style={{
          position: "fixed",
          zIndex: "-1",
          top: "0",
          left: "0",
          minWidth: "100%",
          minHeight: "100%",
          opacity: "90%",
        }}
      />
    </>
  );
}
