import styles from "../section.module.css";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className={styles.lesson}>{children}</main>;
}
