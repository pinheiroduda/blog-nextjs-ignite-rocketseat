import Link from 'next/link'
import styles from './header.module.scss'

// interface HeaderProps {
//   onHandleClickButton: () => void;
// }

export default function Header() {

  return (
    // <header className={styles.headerContainer}>
    //   <button className={styles.logoButton} onClick={onHandleClickButton}>
    //     <img src="/images/Logo.svg" alt="logo" />
    //   </button>
    // </header>
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/images/Logo.svg" alt="logo" />
      </Link>
    </header>
  )
}
