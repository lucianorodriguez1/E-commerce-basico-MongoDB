"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function ProductContainer({ product }) {
  //A usar
  const params = useParams();
  const router = useRouter();
  //
  //Controlador de eliminacion
  const HandleDelete = async () => {
    if (window.confirm("Estas seguro que quieres eliminar este producto?")) {
      try {
        const res = await fetch(`http://localhost:3000/api/products/`, {
          method: "DELETE",
        });
        console.log("Response:", res);
        if (res.ok) {
          console.log("Product deleted successfully");
          router.push("/");
          router.refresh();
        } else {
          console.error("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  }

  /////

  //ver porm console el params
  useEffect(() => {
    console.log(params);
  }, []);
  /////
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {product.title}
      </h1>
      <p className="text-gray-700 text-base">{product.description}</p>
      <p className="text-gray-700 text-base">Stock: {product.stock}</p>
      <p className="text-gray-700 text-base">Precio: ${product.price}</p>
      <div>
        <button
          type="button"
          onClick={HandleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
        >
          Eliminar
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}

export default ProductContainer;
