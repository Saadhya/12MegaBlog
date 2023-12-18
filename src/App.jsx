import { useState } from "react";
import "./App.css";
import ReactCard from "./components/ReactCard";
import Counter from "./components/Counter";

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(config.)
  let myobj = {
    name: "hitesh",
    age: 23,
  };
  // let arr = [1, 2, 3];
  return (
    <>
      <h1 className="text-3xl font-bold p-4 rounded-xl text-black bg-green-400 mb-4">
        Hello world!
      </h1>
      <Counter/>
      <ReactCard channel="chaiorcode" myobj={myobj} />
      <ReactCard channel="krishnae" btnText={"Visit me"} />
    </>
  );
}

export default App;
