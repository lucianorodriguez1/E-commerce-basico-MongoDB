"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

function FormProduct() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    code:"",
    category: "",
  });
  const router = useRouter();
  const params = useParams();

  const getProduct = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${params.id}`
      );
      const product = await res.json();
      setNewProduct({
        title: product.data.title,
        description: product.data.description,
        price: product.data.price,
        stock: product.data.stock,
        code:product.data.code,
        category: product.data.category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status == 200) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async() => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status == 200) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      await createProduct();
    } else {
      await updateProduct();
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      getProduct();
    }
  }, []);
  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {!params.id ? "Create Product" : "Edit Product"}
        </h1>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.title}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.description}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.stock}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="code"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Code:
          </label>
          <input
            type="number"
            id="code"
            name="code"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.code}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.price}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={newProduct.category}
          />
        </div>

        <div className="flex items-center justify-between">
          {!params.id ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormProduct;
