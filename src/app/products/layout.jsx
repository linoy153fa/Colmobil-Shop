import Link from "next/link";
import styles from "../../styles/products-layout.module.css";

export default function ProductsLayout({ children }) {
  return (
    <div className={styles.layout}>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.homeLink}>
            ← Back to Home
          </Link>
          <div className={styles.navLinks}>
            <Link href="/products" className={styles.navLink}>
              All Products
            </Link>
          </div>
        </div>
      </nav>
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
} 