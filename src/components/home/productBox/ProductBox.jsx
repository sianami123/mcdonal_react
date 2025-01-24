import { productsData } from "../../../data/data";
import CartItem from "./cart/CartItem";

export default function ProductBox() {
  return (
    <div className="flex flex-col gap-10 p-4 rounded-lg bg-[#5ac5c4]">
      <h1 className="text-white text-2xl font-bold text-center">
        رستوران مک دونالد شعبه تهران
      </h1>
      <div className="grid grid-cols-2 gap-5 h-[700px] overflow-y-auto">
        {productsData.map((product, index) => (
          <CartItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
