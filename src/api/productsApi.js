import axios from "axios";

async function fetchDataProductsApi() {
  const response = await axios.get("http://localhost:5000/products");
  return response;
}
async function createDataProductsApi(data) {
  const response = await axios.post("http://localhost:5000/products", data);
  return response;
}
async function editDataProductsApi(id) {
  const response = await axios.get(`http://localhost:5000/products/${id}`);
  return response;
}
async function updateDataProductsApi(id, data) {
  const response = await axios.put(`http://localhost:5000/products/${id}`, data);
  return response;
}
async function deleteDataProductsApi(id) {
  const response = await axios.delete(`http://localhost:5000/products/${id}`);
  return response;
}

export { fetchDataProductsApi, createDataProductsApi, editDataProductsApi, updateDataProductsApi, deleteDataProductsApi };
