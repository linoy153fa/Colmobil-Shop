import styles from "../../styles/products.module.css";
import { getProducts } from "../../api/getProducts";
import ProductsFilter from "../../components/products-filter.component.jsx";
import ProductsList from "../../components/products-list.component.jsx";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const searchTerm = params.searchTerm || "";
  const category = params.category || "all";
  
  return {
    title: searchTerm 
      ? `Search: ${searchTerm}-Colmobil Shop`
      : category !== "all" 
        ? `${category} Products-Colmobil Shop`
        : "Products-Colmobil Shop",
    description: searchTerm 
      ? `Search results for "${searchTerm}" in our product collection.`
      : category !== "all"
        ? `Browse our ${category} collection.`
        : "Browse our collection of high-quality products including electronics, clothing, and home goods.",
    keywords: searchTerm 
      ? `${searchTerm}, search, products, shop`
      : category !== "all"
        ? `${category}, products, shop`
        : "products, shop, electronics, clothing, home goods, online store",
  };
}

export default async function ProductsPage({ searchParams }) {
   const params = await searchParams;
  const searchTerm = params.searchTerm || "";
  const selectedCategory = params.category || "all";
  const Allproducts = await getProducts({});
  const CATEGORIES = ['all', ...new Set(Allproducts.map(p => p.category))];
  //filter obj includes text&category
  const filters = {
    searchTerm,
    selectedCategory
  };
//filterd products to render
  const products = await getProducts(filters);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Products</h1>
        <p>Discover amazing products at competitive prices</p>
      </header>

      <ProductsFilter 
        currentFilters={filters}
        categories={CATEGORIES}
      />

      <ProductsList 
        products={products}
        filters={filters}
      />
    </div>
  );
}