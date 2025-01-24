import ProductBox from "./productBox/ProductBox";
import PricesBox from "./pricesBox/pricesBox";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-3 gap-5 p-4 bg-[#2a6488]">
      <div className="col-span-1">
        <PricesBox />
      </div>
      <div className="col-span-2">
        <ProductBox />
      </div>
    </div>
  );
}
