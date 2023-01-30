import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <address>@copyright 2023 <strong>시현진트리오</strong></address>
    </footer>
  );
}