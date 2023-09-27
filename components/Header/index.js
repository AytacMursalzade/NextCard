import React from "react";
import Link from "next/link";
import styles from '../Header/styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span>Blog </span>
      </Link>
    </header>
  );
}

export default Header;
