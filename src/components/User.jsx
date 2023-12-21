import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function User({ counter }) {
  console.log("outside useeffect");
//   for every rendering on dom
//   useEffect(()=>{
//     console.log("after every render")
//   })

//   mounting- componentdidmount(execuste only once)
//   useEffect(() => {
//     console.log(".....re-rendering", counter);
//   }, []);

// componentdidupdate
//   update (state, props-> during first rendering, everytime there is a change in state/value of state that you have passed as dependency)
// useEffect(() => {
//     console.log(".....re-rendering", counter);
//   }, [counter]);

// unmounting- componentwillunmount
  useEffect(() => {
    console.log(".....re-rendering", counter);

    // (cleanup work)
    return ()=>{
        console.log("unmounting ",counter)
        // conn.disconnect();
    }
  }, [counter]);

  return (
    <div>
      <div>User component</div>
    </div>
  );
}
