import Link from "next/link";
import styles from "./Header.module.css";

export default function Index() {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        <span>Users</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
