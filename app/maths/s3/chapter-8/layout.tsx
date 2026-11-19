import type { ReactNode } from "react";
import styles from "./chapter.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className={styles.chapter}>{children}</main>;
}
