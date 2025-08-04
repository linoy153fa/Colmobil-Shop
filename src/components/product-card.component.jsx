import Image from "next/image";
import Link from "next/link";
import styles from "../styles/product-card.module.css";

export default function ProductCard({ product }) {
  if (!product) {
    return null;
  }
console.log({product})
  const {
    id,
    title,
    description = 'No description available',
    category = 'Uncategorized',
    price = 0,
    image
  } = product;
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        {image && (
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{title}</h2>
        <p className={styles.productDescription}>
          {description && description.length > 100 
            ? `${description.substring(0, 100)}...` 
            : description}
        </p>
        <div className={styles.productMeta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.price}>${price}</span>
        </div>
        <Link href={`/products/${id}`} className={styles.viewButton}>
          View Details
        </Link>
      </div>
    </div>
  );
} 