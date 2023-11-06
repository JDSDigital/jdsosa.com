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
      <h1
        className={big_shoulders_display.className}
        style={{ fontSize: "500px" }}
      >
        JDS
      </h1>
      <h1 className={microma.className} style={{ fontSize: "50px" }}>
        JORGE DANIEL SOSA
      </h1>
    </main>
  );
}
