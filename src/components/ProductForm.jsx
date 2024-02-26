/* eslint-disable react/prop-types */
function ProductForm({ name, description, imageURL, onChange, onSubmit }) {
  return (
    <div className="mb-5">
      <form onSubmit={onSubmit}>
        <div className="mb-2 flex justify-center">
          <input className="border border-gray-300 rounded-md p-2 w-96" type="text" placeholder="Nama" value={name} onChange={onChange} name="name" />
        </div>
        <div className="mb-2 flex justify-center">
          <input className="border border-gray-300 rounded-md p-2 w-96" type="text" placeholder="Description" value={description} onChange={onChange} name="description" />
        </div>
        <div className="mb-2 flex justify-center">
          <input className="border border-gray-300 rounded-md p-2 w-96" type="link" placeholder="Link Image" value={imageURL} onChange={onChange} name="imageURL" />
        </div>
        <div className="mb-2 flex justify-center">
          <input className="border border-gray-300 rounded-md p-2 w-96 hover:bg-gray-200 font-semibold" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
