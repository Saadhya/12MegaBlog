import "./App.css";
import ReactCard from "./components/ReactCard";
import SocialPosts from "./learningConcepts/component-as-obj/SocialPosts";
import ReducerSample from "./learningConcepts/useReducerhook/ReducerSample";
import UsersDashboard from "./learningConcepts/usecontextHook/UsersDashboard";
import Customer from "./learningConcepts/usememohook/Customer";

function App() {
  // let myobj = {
  //   name: "hitesh",
  //   age: 23,
  // };
  // let arr = [1, 2, 3];
  return (
    <div className="relative d-flex">
      <h1 className="text-3xl font-bold p-4 rounded-xl text-black bg-green-400 mb-4">
        React with Tailwind.css
      </h1>
      {/* <Counter/> */}
      {/* <ReactCard channel="chaiorcode" myobj={myobj} /> */}
      {/* <ReactCard channel="krishnae" btnText={"Visit me"} /> */}
      {/* <SideEffects /> */}
      {/* <ReducerSample /> */}

      {/* usecontext hook */}
      {/* <UsersDashboard/> */}

      {/* usememo */}
      {/* <Customer/> */}

      {/* interview-question : component as obje*/}
      <SocialPosts />
    </div>
  );
}

export default App;
