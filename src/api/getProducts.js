import { BASE_URL } from "../shared/consts/base-url.const";

export async function getProducts(filters = {}) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    let products = await response.json();
//filter products by text
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      products = products.filter(product =>
        product.title.toLowerCase().includes(searchLower)
      );
    }
//filter products by category
    if (filters.selectedCategory && filters.selectedCategory !== 'all') {
      products = products.filter(product =>
        product.category.toLowerCase() === filters.selectedCategory.toLowerCase()
      );
    }
    //filtered products
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
} 