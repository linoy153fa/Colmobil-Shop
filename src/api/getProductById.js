import { BASE_URL } from "../shared/consts/base-url.const";

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const product = await response.json();
    
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
} 