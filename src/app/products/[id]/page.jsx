import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../styles/product-details.module.css";
import { getProductById } from "../../../api/getProductById";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(parseInt(id));

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found."
    };
  }
  return {
    title: `${product.title}-Colmobil Shop`,
    description: product.description,
    keywords: `${product.title}, ${product.category}, online shop, ${product.title.toLowerCase()}`,
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProductById(parseInt(id));
  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span> / </span>
        <Link href="/products">Products</Link>
        <span> / </span>
        <span>{product.title}</span>
      </nav>

      <div className={styles.productLayout}>
        <div className={styles.productImage}>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.productInfo}>
          <header className={styles.productHeader}>
            <h1>{product.title}</h1>
            <span className={styles.category}>{product.category}</span>
            <div className={styles.price}>${product.price}</div>
          </header>

          <div className={styles.description}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 