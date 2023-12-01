import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
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
        <div className="w-[400px] h-[150px] flex justify-end items-center text-5xl bg-gray-900 text-white p-5 rounded-t-xl overflow-hidden">
          <h1>{input}</h1>
        </div>
        <div className="grid grid-cols-4 grid-row-5 gap-4 border border-gray-200 shadow-xl w-[100%] h-[100%] p-5 bg-white rounded-b-xl">
          <Button
            text={"+"}
            style={style.operator}
            onClick={() => handleDisplay("+")}
          />
          <Button
            text={"-"}
            style={style.operator}
            onClick={() => handleDisplay("-")}
          />
          <Button
            text={"x"}
            style={style.operator}
            onClick={() => handleDisplay("*")}
          />
          <Button
            text={"÷"}
            style={style.operator}
            onClick={() => handleDisplay("/")}
          />
          <Button
            text={"7"}
            style={style.number}
            onClick={() => handleDisplay("7")}
          />
          <Button
            text={"8"}
            style={style.number}
            onClick={() => handleDisplay("8")}
          />
          <Button
            text={"9"}
            style={style.number}
            onClick={() => handleDisplay("9")}
          />
          <Button
            text={"4"}
            style={style.number}
            onClick={() => handleDisplay("4")}
          />
          <Button
            text={"5"}
            style={style.number}
            onClick={() => handleDisplay("5")}
          />
          <Button
            text={"6"}
            style={style.number}
            onClick={() => handleDisplay("6")}
          />
          <Button
            text={"1"}
            style={style.number}
            onClick={() => handleDisplay("1")}
          />
          <Button
            text={"2"}
            style={style.number}
            onClick={() => handleDisplay("2")}
          />
          <Button
            text={"3"}
            style={style.number}
            onClick={() => handleDisplay("3")}
          />
          <Button
            text={"."}
            style={style.number}
            onClick={() => handleDisplay(".")}
          />
          <Button
            text={"0"}
            style={style.number}
            onClick={() => handleDisplay("0")}
          />
          <Button 
            text={"C"} 
            style={style.number} 
            onClick={handleReset} 
          />
          <Button 
            text={"="} 
            style={style.equal} 
            onClick={handleCalculate} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
