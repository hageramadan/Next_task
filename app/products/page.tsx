import { Suspense } from "react";
import { getProducts } from "../services/products";
import ProductList from "./productList";
import Filter from "../components/Filter";

interface Props {
  searchParams: Promise<{ categorySlug?: string }>;
}

export const revalidate = 15;

export default async function ProductsPage({ searchParams }: Props) {
  const { categorySlug } = await searchParams;
  const categoryFilter = categorySlug ?? "all";

  // الأفضل لو تزودي دعم للفلاتر في getProducts
  const products = await getProducts();

  return (
    <div className="mx-10 md:mx-20 lg:mx-35 xl:mx-44">
      <Filter />
      <Suspense fallback={<div className="loader flex justify-center mt-8"></div>}>
        <ProductList products={products} cate={categoryFilter} />
      </Suspense>
    </div>
  );
}
