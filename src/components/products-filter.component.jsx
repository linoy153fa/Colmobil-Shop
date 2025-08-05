'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from "../styles/products.module.css";

export default function ProductsFilter({ currentFilters, categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(currentFilters.searchTerm || '');
  const [selectedCategory, setSelectedCategory] = useState(currentFilters.selectedCategory || 'all');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set('searchTerm', searchTerm.trim());
    } else {
      params.delete('searchTerm');
    }
    
    if (selectedCategory && selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }
    
    const queryString = params.toString();
    const url = queryString ? `/products?${queryString}` : '/products';
    
    router.push(url);
  };

  return (
    <form className={styles.controls} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filters}>
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
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