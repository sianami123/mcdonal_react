import "./cartItem.css";

export default function CartItem({ product, id }) {
  let totalPrice = 0;

  return (
    <div className="flex justify-end items-center gap-2 rounded-md bg-white p-2 w-full">
      <div className="flex flex-col items-end gap-2 w-full">
        <h1>{product.name}</h1>
        <p>تومان {product.price}</p>
        <div className="flex justify-between items-center w-full">
          <span>{totalPrice} تومان</span>
          <div className="flex items-center rounded-sm">
            <button className="bg-[#388090] text-white px-2 rounded-s-lg items-center text-center">
              -
            </button>
            <span className="p-2">0</span>
            <button className="bg-[#388090] text-white px-2 rounded-e-lg">
              +
            </button>
          </div>
        </div>
      </div>
      <img src={product.image} alt={product.name} className="w-20 " />
    </div>
  );
}
