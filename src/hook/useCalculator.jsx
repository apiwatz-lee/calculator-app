import { useState } from "react";

const useCalculator = () => {
  const [input, setInput] = useState("0");

  const style = {
    operator:
      "border border-gray-200 rounded-lg bg-orange-400 text-white text-3xl hover:bg-orange-500 active:-translate-y-5 duration-500",
    number:
      "border border-gray-200 rounded-lg bg-gray-200 text-3xl hover:bg-gray-300 active:-translate-y-5 duration-500",
    equal:
      "border border-gray-200 rounded-lg col-start-4 row-start-2 row-end-6 bg-orange-400 text-white text-3xl hover:bg-orange-500 active:-translate-y-5 duration-500 ",
  };

  const handleDisplay = (value) => {
    if (input.toString().charAt(0) === "0") {
      //ใส่ toString เพื่อแปลง State input เป็นString อีกครั้ง เนื่องจากหลังทำการ onClick handleCalculate แล้ว ตัว State Input จะเป็น Number
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleReset = () => {
    setInput("0");
  };

  const handleCalculate = () => {
    const result = eval(input);
    setInput(result);
  };
  return {
    input,
    setInput,
    style,
    handleDisplay,
    handleReset,
    handleCalculate,
  };
};

export default useCalculator;
