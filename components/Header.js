import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <Link href="/">Vote Page</Link>
            <Link href="/admin">Admin Page</Link>
            <ConnectButton></ConnectButton>
        </nav>
    );
}
