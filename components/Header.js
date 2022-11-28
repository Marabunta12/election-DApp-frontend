import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.title}>Election DApp</h1>
            <div className={styles.navbarButtonsContainer}>
                <Link className={styles.navbarButton} href="/">
                    Vote Page
                </Link>
                <Link className={styles.navbarButton} href="/admin">
                    Admin Page
                </Link>
                <ConnectButton moralisAuth={false}></ConnectButton>
            </div>
        </nav>
    );
}
