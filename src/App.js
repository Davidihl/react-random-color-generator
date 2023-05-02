export default function App() {
  return (
    <div
      key="outerDiv"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 w-80">
        <div
          key="colorDiv"
          className="w-80 h-40 bg-blue-300 flex justify-center items-center rounded"
        >
          <span className="bg-white p-4 rounded text-sm font-bold">
            #123456
          </span>
        </div>
        <form className="flex gap-2 bg-gray-300 p-2 rounded drop-shadow">
          <input className="border border-gray-600 p-2 rounded w-1/3" />
          <input className="border border-gray-600 p-2 rounded w-1/3" />
          <button className="bg-gray-600 text-white p-2 rounded w-1/3">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}
