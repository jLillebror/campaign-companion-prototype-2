import Link from 'next/link';
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.title}>Campaign Companion Prototype</h1>
      <nav className={styles.navigation}>
        <button className={styles.button}>
          <Link href="/">Home</Link>
        </button>
        <button className={styles.button}>
          <Link href="/campaigns/campaigns">Campaigns</Link>
        </button>
        <button className={styles.button}>
          <Link href="/characters/characters">Characters</Link>
        </button>
        <button className={styles.button}>
          <Link href="/notes/notes">Notes</Link>
        </button>
        <button className={styles.button}>
          <Link href="/contactpage">Contact Me</Link>
        </button>
      </nav>
    </div>
  );
}
 
export default Navigation;
