import { useState } from "react";
import Button from "./components/Button/Button";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Products from "./dataProduct/Data.JSX";

function App() {
  const initialStateData = {
    name: "",
    description: "",
    imageURL: "",
  };

  const [products, setProducts] = useState(Products);

  const [data, setData] = useState(initialStateData);
  const { name, description, imageURL } = data;

  const [showForm, setShowForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  function handleOnChange(e) {
    setData({
      ...data,
      id: products.length + 1,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setProducts([...products, data]);
    setData(initialStateData);
  }

  function handleEdit(productId) {
    const selectedProduct = products.find((product) => product.id === productId);
    setData(selectedProduct);
    setShowForm(true);
    setSelectedProductId(productId);
  }

  function handleDelete(productId) {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div className="bg-white p-5">
      <div className="my-10 font-semibold text-3xl text-center flex justify-center gap-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <div>Dimas SkinCare</div>
      </div>
      <Button onClick={handleShowForm}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </Button>
      {showForm && <ProductForm name={name} description={description} imageURL={imageURL} onChange={handleOnChange} onSubmit={handleOnSubmit} />}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          return <ProductList key={product.id} name={product.name} description={product.description} image={product.image} onHandleEdit={() => handleEdit(product.id)} onHandleDelete={() => handleDelete(product.id)} />;
        })}
      </div>
    </div>
  );
}

export default App;
