import styles from "../styles/products.module.css";

export default function ProductsFilter({ currentFilters, categories }) {
  return (
    <form className={styles.controls} method="GET">
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search products..."
          defaultValue={currentFilters.searchTerm}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filters}>
        <select
          name="category"
          defaultValue={currentFilters.selectedCategory}
          className={styles.select}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === "all" ? "All Categories" : category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.filterButton}>
        Apply Filters
      </button>
    </form>
  );
} 