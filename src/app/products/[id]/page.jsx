import ProductContainer from "@/containers/ProductContainer";
import Product from "@/models/Product";
import { connectDB } from "@/utils/mongoose";

async function loadProduct(id) {
  connectDB();
  const product = await Product.findById(id).lean();
  const serializedProduct = JSON.parse(JSON.stringify(product));
  return serializedProduct;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);
  return <ProductContainer product={product} />;
}

export default ProductPage;
