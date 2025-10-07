
// app/services/products.ts
export async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export async function getProductById(id: number | string) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.status}`);
     
    }

    const data = await res.json();
    return data; 
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return null;
  }
}