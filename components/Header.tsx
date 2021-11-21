import Link from "next/link";
import styles from "@/styles/Header.module.css";

type HeaderProps = {
  username: string;
};

const Header: React.FC<HeaderProps> = ({ username }) => (
  <div className={styles.header}>
    <div className={`container ${styles.headerContainer}`}>
      <Link href="/">
        <a className={styles.headerLink}>@</a>
      </Link>
      <span className={styles.headerDivider}>/</span>
      <Link href={`/${username}`}>
        <a className={styles.headerLink}>{username}</a>
      </Link>
    </div>
  </div>
);

export default Header;
