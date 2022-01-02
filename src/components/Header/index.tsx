import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <button className={styles.logoButton}>
        <img src="/images/Logo.svg" alt="logo" />
      </button>
    </header>
  )
}
