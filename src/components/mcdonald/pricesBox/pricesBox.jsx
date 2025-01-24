export default function PricesBox() {
  return (
    <div className="flex flex-col gap-20 bg-[#5ac5c4] p-4 rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <span>تومان</span>
            <span>100000</span>
          </span>
          <h1 className="font-bold text-sm text-center">جمع کل سفارشات</h1>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <span>تومان</span>
            <span>100000</span>
          </span>
          <h1 className="font-bold text-sm text-center">حق سرویس و کارمزد</h1>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <span>تومان</span>
            <span>100000</span>
          </span>
          <h1 className="font-bold text-sm text-center">تخفیف</h1>
        </div>
        <div className="flex w-full rounded-lg">
          <button className="bg-[#388090] text-white px-2 rounded-s-lg">
            ✔
          </button>
          <input type="text" className="w-full p-1 rounded-e-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center bg-[#f9dc49] p-2 rounded-lg">
          <span className="flex items-center gap-1">
            <span>تومان</span>
            <span>100000</span>
          </span>
          <h1 className="font-bold text-sm text-center">مبلغ قابل پرداخت</h1>
        </div>
        <button className="bg-[#388090] text-white  px-2 py-4 rounded-lg">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}
