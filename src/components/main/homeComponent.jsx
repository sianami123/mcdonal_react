import ProductBox from "./productBox/ProductBox";
import PricesBox from "./pricesBox/pricesBox";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-6 gap-5 p-2 bg-[#2a6488]">
      <div className="col-span-2">
        <PricesBox />
      </div>
      <div className="col-span-4">
        <ProductBox />
      </div>
    </div>
  );
}
