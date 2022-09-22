import React, { useState } from 'react';
import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils';
import ThemeSwitcher from './ThemeSwitcher';
const Stopwatch = () => {
  const [inputTime, setInputTime] = useState();
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handleSubmit,
  } = useTimer(inputTime);

  return (
    <>
      <div className="flex h-screen bg-main ">
        <div className="m-auto  w-[50rem]">
          {/* <ThemeSwitcher className="mt-12" /> */}
          <p className="text-5xl text-white pl-60">My Stopwatch</p>
          <p className="pt-10 pl-20 text-white text-9xl ">
            {timer > 0 ? formatTime(timer) : '00 : 00 : 00'}
          </p>
          <div className="flex justify-around">
            <form className="pt-8 ">
              <div class="mb-3 mt-3">
                <input
                  type="number"
                  class="rounded-lg px-7 py-2 form-control"
                  placeholder="Enter Time in seconds"
                  value={inputTime}
                  min="0"
                  step="1"
                  onChange={(e) => {
                    let val = parseInt(e.target.value, 10);

                    if (isNaN(val)) {
                      setInputTime({ inputTime: '' });
                    } else {
                      // is A Number
                      val = val >= 0 ? val : 0;
                      setInputTime(val);
                    }
                  }}
                />
                <button
                  type="submit"
                  class="text-white border-gray-300 py-1 text-lg font-bold bg-blue-500  ml-3  rounded-lg px-7  shadow-md hover:shadow-xl duration-300 ease-in-out"
                  onClick={(e) => handleSubmit(e)}
                >
                  Enter
                </button>
              </div>
            </form>
            <div className="flex justify-start pt-10 pb-3 ">
              {!isActive && !isPaused ? (
                <button
                  className="text-lg font-bold text-white duration-300 ease-in-out bg-green-500 border-gray-300 rounded-lg shadow-md hover:shadow-xl px-7"
                  onClick={handleStart}
                >
                  Start
                </button>
              ) : isPaused ? (
                <button
                  className="text-lg font-bold text-black duration-300 ease-in-out bg-yellow-300 border-gray-300 rounded-lg shadow-md px-7 hover:shadow-xl"
                  onClick={handlePause}
                >
                  Pause
                </button>
              ) : (
                <button
                  className="text-lg font-bold duration-300 ease-in-out bg-green-500 border-gray-300 rounded-lg shadow-md px-7 hover:shadow-xl"
                  onClick={handleResume}
                >
                  Resume
                </button>
              )}
              <button
                className="ml-5 text-lg font-bold text-white duration-300 ease-in-out bg-red-700 border-gray-300 rounded-lg shadow-md px-7 hover:shadow-xl"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
