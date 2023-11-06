import Image from "next/image";
import styles from "./page.module.css";

import { Big_Shoulders_Display, Michroma } from "next/font/google";

const big_shoulders_display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "700",
});
const microma = Michroma({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${big_shoulders_display.className} ${styles.title}`}>
        JDS
      </h1>
      <h1 className={`${microma.className} ${styles.subtitle}`}>
        JORGE DANIEL SOSA
      </h1>
      <div className={styles.logos}>
        <a href="https://github.com/JDSDigital" target="_blank">
          <Image alt="github" src="/github.svg" width="50" height="50" />
        </a>
        <a href="https://www.linkedin.com/in/jdsosa" target="_blank">
          <Image alt="linkedin" src="/linkedin.svg" width="50" height="50" />
        </a>
      </div>
    </main>
  );
}
