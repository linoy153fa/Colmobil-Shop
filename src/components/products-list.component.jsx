import ProductCard from "./product-card.component.jsx";
import styles from "../styles/products.module.css";

export default function ProductsList({ products }) {
  if (products.length === 0) {
    return (
      <div className={styles.errorState}>
        <h2>No products found</h2>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.resultsInfo}>
        <p>Showing {products.length} products</p>
      </div>
      
      <section className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
} 