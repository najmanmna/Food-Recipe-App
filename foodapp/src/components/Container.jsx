import styles from "./container.module.css";

export default function ({ children }) {
  return <div className={styles.Container}>{children}</div>;
}
