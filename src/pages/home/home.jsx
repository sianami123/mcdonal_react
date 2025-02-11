export default function Home() {
  return (
    <div className="flex gap-4 items-center justify-center h-screen">
      <a href="/calculator" className="text-2xl p-4 hover:text-blue-500">
        calculator
      </a>
      <a href="/mcdonald" className="text-2xl p-4 hover:text-blue-500">
        mcdonald
      </a>
      <a href="/engagebay" className="text-2xl p-4 hover:text-blue-500">
        engagebay
      </a>
      <a href="/counter" className="text-2xl p-4 hover:text-blue-500">
        counter
      </a>
    </div>
  );
}
