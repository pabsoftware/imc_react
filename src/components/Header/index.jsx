import styles from './Header.module.css'

const Header = ({}) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Calculadora IMC</h1>
            <h4 className={styles.titulo}>Paulo Assunção</h4>
        </header>
    )
}

export default Header;