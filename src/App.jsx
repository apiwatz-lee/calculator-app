import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  const style = {
    operator:
      "border border-gray-200 rounded-lg bg-orange-400 text-white text-3xl",
    number: "border border-gray-200 rounded-lg bg-gray-200 text-3xl",
    equal:
      "border border-gray-200 rounded-lg col-start-4 row-start-2 row-end-6 bg-orange-400 text-white text-3xl",
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

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-200 ">
      <div className="flex flex-col items-center w-[400px] h-[500px] rounded-xl">
        <div className="w-[400px] h-[100px] flex justify-end items-center text-5xl bg-gray-900 text-white p-5 rounded-t-xl">
          <h1>{input}</h1>
        </div>
        <div className="grid grid-cols-4 grid-row-5 gap-4 border border-gray-200 shadow-xl w-[100%] h-[100%] p-5 bg-white rounded-b-xl">
          <button className={style.operator} onClick={() => handleDisplay("+")}>
            +
          </button>
          <button className={style.operator} onClick={() => handleDisplay("-")}>
            -
          </button>
          <button className={style.operator} onClick={() => handleDisplay("*")}>
            &#215;
          </button>
          <button className={style.operator} onClick={() => handleDisplay("/")}>
            &#247;
          </button>
          <button className={style.number} onClick={() => handleDisplay("7")}>
            7
          </button>
          <button className={style.number} onClick={() => handleDisplay("8")}>
            8
          </button>
          <button className={style.number} onClick={() => handleDisplay("9")}>
            9
          </button>
          <button className={style.number} onClick={() => handleDisplay("4")}>
            4
          </button>
          <button className={style.number} onClick={() => handleDisplay("5")}>
            5
          </button>
          <button className={style.number} onClick={() => handleDisplay("6")}>
            6
          </button>
          <button className={style.number} onClick={() => handleDisplay("1")}>
            1
          </button>
          <button className={style.number} onClick={() => handleDisplay("2")}>
            2
          </button>
          <button className={style.number} onClick={() => handleDisplay("3")}>
            3
          </button>
          <button className={style.number} onClick={() => handleDisplay(".")}>
            .
          </button>
          <button className={style.number} onClick={() => handleDisplay("0")}>
            0
          </button>
          <button className={style.number} onClick={handleReset}>
            C
          </button>
          <button className={style.equal} onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
