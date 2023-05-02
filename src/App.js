import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  console.log(randomColor());

  return (
    <div
      key="outerDiv"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 w-80">
        <div
          key="colorDiv"
          className="max-w-80 h-40 flex justify-center items-center rounded"
          style={{ backgroundColor: `${color}` }}
        >
          <span
            className="bg-white p-4 rounded text-sm font-bold"
            style={{ color: `${color}` }}
          >
            {color}
          </span>
        </div>
        <form className="flex gap-2 bg-gray-300 p-2 rounded drop-shadow relative items-end">
          <label className="w-1/3">
            <div className="text-xs">Hue</div>
            <input
              key="hue"
              className="border border-gray-600 p-2 rounded w-full"
              placeholder="red"
            />
          </label>
          <label className="w-1/3">
            <div className="text-xs">Luminosity</div>
            <input
              key="luminosity"
              className="border border-gray-600 p-2 rounded w-full"
              placeholder="light"
            />
          </label>
          <button className="bg-gray-600 text-white p-2 rounded w-1/3 h-[42px]">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}
