import { productsData } from "../../../data/data";
import CartItem from "./cart/CartItem";

export default function ProductBox() {
  return (
    <div className="flex flex-col gap-10 p-4 rounded-lg bg-[#5ac5c4]">
      <h1 className="text-white text-2xl font-bold text-center">
        رستوران مکدوناد شعبه تهران
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {productsData.map((product, product.id) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
