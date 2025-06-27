import { useState, useEffect } from "react";

export default function RangeSlider({
  priceRange,
  setPriceRange,
  min = 50,
  max = 200,
}) {
  const [minVal, setMinVal] = useState(priceRange.min);
  const [maxVal, setMaxVal] = useState(priceRange.max);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPriceRange({ min: minVal, max: maxVal });
    }, 300); // Debounce update
    return () => clearTimeout(timeout);
  }, [minVal, maxVal]);

  return (
    <div className="relative h-14">
      {/* Range Track */}
      <div className="absolute top-1/2 w-full h-1 bg-gray-200 rounded translate-y-[-50%]" />

      {/* Highlighted Range */}
      <div
        className="absolute top-1/2 h-1 bg-blue-500 rounded translate-y-[-50%]"
        style={{
          left: `${((minVal - min) / (max - min)) * 100}%`,
          width: `${((maxVal - minVal) / (max - min)) * 100}%`,
        }}
      />

      {/* Min Thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => {
          const value = Math.min(Number(e.target.value), maxVal - 10);
          setMinVal(value);
        }}
        className="absolute z-20 w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:pointer-events-auto"
        style={{ zIndex: minVal > max - 30 ? 5 : 10 }}
      />

      {/* Max Thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => {
          const value = Math.max(Number(e.target.value), minVal + 10);
          setMaxVal(value);
        }}
        className="absolute z-20 w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:pointer-events-auto"
      />

      {/* Value Labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-600">
        <span>${minVal}</span>
        <span>${maxVal}</span>
      </div>
    </div>
  );
}
