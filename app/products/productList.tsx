import { IProduct } from "../types/Iproduct";
import ProductCard from "./productCard";

interface Props {
  products: IProduct[];
  cate: string;
}

export default function ProductList({ products, cate }: Props) {
  const filteredProducts =
    cate === "all"
      ? products
      : products.filter((product) => product.category.slug === cate);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-2 mx-10">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
