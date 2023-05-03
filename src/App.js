/** @jsxImportSource @emotion/react */

import { css, Global } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState();
  const [luminosity, setLuminosity] = useState();
  const [width, setWidth] = useState('300px');
  const [widthInput, setWidthInput] = useState(width);
  const [height, setHeight] = useState('300px');
  const [heightInput, setHeightInput] = useState(height);
  const [bounce, setBounce] = useState(false);
  const [bounceInput, setBounceInput] = useState(bounce);

  console.log(bounce);
  bounce ? console.log('el-wrap x') : console.log('nothing');

  // Tailwind Input for better readability
  const container = 'w-screen h-screen flex flex-col justify-between';
  const input = 'border border-gray-600 p-2 rounded w-full';
  const form = 'flex gap-2 bg-gray-300 p-2 relative items-end';
  const label = 'text-xs';
  const checkbox = 'rounded h-[22px] w-[22px] text-gray-600';
  const button =
    'bg-gray-600 hover:bg-red-500 transition-all text-white p-2 rounded w-1/5 h-[42px]';

  return (
    <>
      {/* Screensaver Global Styles */}
      <Global
        styles={css`
          :root {
            --width: ${width};
            --height: ${height};
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
      <div className={container}>
        <div
          className={`flex flex-col gap-4 w-80 ${
            bounce ? 'el-wrap x' : 'w-full h-full items-center justify-center'
          }`}
        >
          {/* Color div */}
          <div
            className={`max-w-80 h-40 flex justify-center items-center rounded transition-all drop-shadow-lg el ${
              bounce ? 'y' : ''
            }`}
            style={{ backgroundColor: color }}
          >
            Generated Color: {color}
          </div>
        </div>

        {/* Form elements */}
        <div className="h-[74px]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className={form}
          >
            {/* Hue */}
            <label className="w-1/5">
              <div className={label}>Hue</div>
              <input
                onChange={(event) => {
                  setHue(event.currentTarget.value);
                }}
                className={input}
                placeholder="e.g red"
              />
            </label>

            {/* Luminosity */}
            <label className="w-1/5">
              <div className={label}>Luminosity</div>
              <input
                onChange={(event) => {
                  setLuminosity(event.currentTarget.value);
                }}
                className={input}
                placeholder="e.g light"
              />
            </label>

            {/* Width */}
            <label className="w-1/5">
              <div className={label}>Width</div>
              <input
                value={widthInput}
                onChange={(event) => setWidthInput(event.currentTarget.value)}
                className={input}
              />
            </label>

            {/* Height */}
            <label className="w-1/5">
              <div className={label}>Height</div>
              <input
                value={heightInput}
                onChange={(event) => setHeightInput(event.currentTarget.value)}
                className={input}
              />
            </label>

            {/* Screensaver checkbox */}
            <label className="w-1/5">
              <div className={label}>Bounce</div>
              <div className="h-[42px] flex items-center">
                <input
                  type="checkbox"
                  checked={bounceInput ? 'checked' : ''}
                  onClick={() => setBounceInput(!bounceInput)}
                  value={bounceInput}
                  className={checkbox}
                />
              </div>
            </label>

            {/* Submit button */}
            <button
              onClick={() => {
                setColor(randomColor({ hue: hue, luminosity: luminosity }));
                setWidth(widthInput);
                setHeight(heightInput);
                setBounce(bounceInput);
              }}
              className={button}
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
