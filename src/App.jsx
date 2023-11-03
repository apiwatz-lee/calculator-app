import "./App.css";
import Button from "./components/Button";
import useCalculator from "./hook/useCalculator";

function App() {
  const { input, style, handleDisplay, handleReset, handleCalculate } =
    useCalculator();

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
          <Button text={"C"} style={style.number} onClick={handleReset} />
          <Button text={"="} style={style.equal} onClick={handleCalculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
