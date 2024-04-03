import Product from "@/models/Product";
import { connectDB } from "@/utils/mongoose";
async function loadProduct(id) {
  connectDB();
  const product = await Product.findById(id);
  return product;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.productId);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {product.title}
      </h1>
      <p className="text-gray-700 text-base">{product.description}</p>
      <p className="text-gray-700 text-base">Stock: {product.stock}</p>
      <p className="text-gray-700 text-base">Precio: ${product.price}</p>
    </div>
  );
}

export default ProductPage;
