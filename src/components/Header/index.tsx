import Link from 'next/link';
import styles from './header.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Header() {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <img src="/Logo.svg" alt="logo" className={styles.logo} />
        </a>
      </Link>
    </header>
  );
}
