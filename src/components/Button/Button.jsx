/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <div className="mb-5 flex justify-end" onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
