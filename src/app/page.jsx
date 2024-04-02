import ProductCard from "@/components/ProductCard";
import Product from "@/models/Product";
import { connectDB } from "@/utils/mongoose";

async function loadProducts() {
  connectDB();
  const products = await Product.find();
  return products;
}

const HomePage = async () => {
  const products = await loadProducts();
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}
    </div>
  );
};

export default HomePage;
