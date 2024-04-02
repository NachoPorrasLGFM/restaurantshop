import ProductCard from "@/components/productCard";
import { Product } from "@/types/type";
import { data } from "@/data/products";

export default function Home() {
  return (
    <section className="w-full h-full mx-auto px-4 py-8 sm:px-6 sm:py-8 lg:px-8 ">
      <h2 className="text-4xl text-black pb-8">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
