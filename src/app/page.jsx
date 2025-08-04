import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <p>Welcome to Our Colmobil Shop</p>
        <div className={styles.ctas}>
          <Link href="/products" className={styles.primary}>
            Browse Products
          </Link>
        </div>
      </main>
    </div>
  );
}
