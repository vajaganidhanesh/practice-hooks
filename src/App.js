import { useCallback, useState } from "react";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const data = useCallback(() => {
    return `Hello ${value}`;
  }, [value]);

  return (
    <>
      <div className="">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder=""
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <Greeting Greetings={data} />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + by 1
      </button>
    </>
  );
}

export default App;
