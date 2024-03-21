import { promises as fs } from "fs";
import Image from "next/image";

async function loadProducts() {
  const file = await fs.readFile(
    process.cwd() + "/public/products.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
async function loadProduct(id) {
  const res = await loadProducts();
  for (const category of res) {
    const productsList = Object.values(category)[0];
    const product = productsList.find((product) => product.id == id);
    if (product) {
      return product;
    }
  }
  return undefined;
}

async function Product({ params }) {
  const product = await loadProduct(params.productId);
  if (product) {
    return (
      <div>
        <Image
          src={`/${product.imagen}`}
          width={300}
          height={300}
          alt="img de product"
        />
        <div>
          <h2>{product.titulo}</h2>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
          <p>{product.categoria}</p>
        </div>
      </div>
    );
  }
  return <h1>NO ENCONTRADO</h1>;
}

export default Product;
