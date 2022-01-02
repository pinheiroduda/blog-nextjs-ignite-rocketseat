import { useRouter } from 'next/router'
import styles from './header.module.scss'

interface HeaderProps {
  onHandleClickButton: () => void;
}

export default function Header({ onHandleClickButton }: HeaderProps) {

  return (
    <header className={styles.headerContainer}>
      <button className={styles.logoButton} onClick={onHandleClickButton}>
        <img src="/images/Logo.svg" alt="logo" />
      </button>
    </header>
  )
}
