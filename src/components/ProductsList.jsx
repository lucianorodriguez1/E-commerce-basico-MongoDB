import React from "react";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";

async function ProductsList() {
  const file = await fs.readFile(
    process.cwd() + "/public/products.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const productsList = data.map((category) => (
    <div key={Object.keys(category)[0]}>
      <h2 className="text-5xl text-center">{Object.keys(category)[0]}</h2>
      <div className="flex flex-wrap">
      {category[Object.keys(category)[0]].map((product) => (
        <div
          key={product.id}
          className="bg-white rounded overflow-hidden shadow-md w-48 p-6 m-4"
        >
          <Link href={`/products/${product.id}`}>
            <Image
              src={`/${product.imagen}`}
              width={300}
              height={300}
              alt="img de product"
            />
            <div>
              <h3 className="font-bold">{product.titulo}</h3>
              <p>${product.precio}</p>
            </div>
          </Link>
        </div>
      ))}
      </div>
      
    </div>
  ));

  return (
    <>
      <ul>{productsList}</ul>s
    </>
  );
}

export default ProductsList;
