import styles from "../styles/web3notenabled.module.css";

export default function Web3NotEnabled() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>Web3 Currently Not Enabled!</div>
            <div className={styles.content}>Please Connect Wallet.</div>
        </div>
    );
}
