import Link from "next/link";


function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="bg-gray-800 p-10 text-white hover:cursor-pointer hover:bg-gray-700">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>Stock:{product.stock} unidades</p>
        <p className="text-slate-400 my-2">
          <span className="mr-1">
            Created at:
          </span>
          {new Date(product.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
