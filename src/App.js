import { css, Global } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState();
  const [luminosity, setLuminosity] = useState();

  // Tailwind Input
  const inputClass = 'border border-gray-600 p-2 rounded w-full';

  return (
    <>
      {/* Screensaver Global Styles */}
      <Global
        styles={css`
          :root {
            --width: 300px;
            --height: 300px;
            --x-speed: 13s;
            --y-speed: 7s;
            --transition-speed: 2.2s;
          }

          .el {
            width: var(--width);
            height: var(--height);
          }

          .x {
            animation: x var(--x-speed) linear infinite alternate;
          }
          .y {
            animation: y var(--y-speed) linear infinite alternate;
          }

          @keyframes x {
            100% {
              transform: translateX(calc(100vw - var(--width)));
            }
          }
          @keyframes y {
            100% {
              transform: translateY(calc(100vh - var(--height) - 74px));
            }
          }
        `}
      />
      <div
        key="container"
        className="w-screen h-screen flex flex-col justify-between"
      >
        <div
          key="colorGenerator"
          className="flex flex-col gap-4 w-80 el-wrap x"
        >
          {/* Color div */}
          <div
            key="colorDiv"
            className="max-w-80 h-40 flex justify-center items-center rounded transition-all drop-shadow-lg el y"
            style={{ backgroundColor: color }}
          >
            Generated Color: {color}
          </div>
        </div>

        {/* Form elements */}
        <div className="h-[74px]">
          <form
            key="preferences"
            onSubmit={(event) => {
              event.preventDefault();
              setColor(randomColor({ hue: hue, luminosity: luminosity }));
            }}
            className="flex gap-2 bg-gray-300 p-2 relative items-end"
          >
            {/* Hue */}
            <label className="w-1/5">
              <div className="text-xs">Hue</div>
              <input
                key="hue"
                onChange={(event) => {
                  setHue(event.currentTarget.value);
                }}
                className={inputClass}
                placeholder="e.g red"
              />
            </label>

            {/* Luminosity */}
            <label className="w-1/5">
              <div className="text-xs">Luminosity</div>
              <input
                key="luminosity"
                onChange={(event) => {
                  setLuminosity(event.currentTarget.value);
                }}
                className={inputClass}
                placeholder="e.g light"
              />
            </label>

            {/* Width */}
            <label className="w-1/5">
              <div className="text-xs">Width</div>
              <input key="width" className={inputClass} />
            </label>

            {/* Height */}
            <label className="w-1/5">
              <div className="text-xs">Height</div>
              <input key="height" className={inputClass} />
            </label>

            {/* Screensaver checkbox */}
            <label className="w-1/5">
              <div className="text-xs">Bounce</div>
              <div className="h-[42px] flex items-center">
                <input
                  type="checkbox"
                  className="rounded h-[22px] w-[22px] text-gray-600"
                />
              </div>
            </label>

            {/* Submit button */}
            <button className="bg-gray-600 hover:bg-red-500 transition-all text-white p-2 rounded w-1/5 h-[42px]">
              Generate
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
