import React, { useMemo, useState } from "react";
import UserCard from "./UserCard";

// this component is for usememo- usememo is used to optimize the complex computaionts in efficient way
// usememo():: memoization an optimization technique that can help make heavy computation process more efficient. 
// it does this by storing computation results in cache and retrieving that same information from the cache the next time 
// its needed instead of computing it again.
const Customer = () => {
  const usersList = [
    { id: 1, name: "Nisha" },
    { id: 2, name: "Sonia" },
    { id: 3, name: "Deepa" },
    { id: 4, name: "John" },
  ];
  const [users, setUsers] = useState(usersList);
  const displayList = useMemo(
    () =>
      users.map((user) => {
        console.log("user...");
        return <UserCard key={user.id} data={user} />;
      }),
    [users] //adding users dependency to re-render only when users are updated
  );

  // problem- when we run counter button, its re-rendering all components under this component like usercard etc.
  // ideally, it shouldn't call other funcs , so to avoid extra re-rendering we use useMemo() and will store displayList content inside usememo()

  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };
// only use it with large num of list, used to enhance performance
  const setUserDetails = (val) => {
    setUsers([...users, { id: users.length + 1, name: val }]);
  };
  return (
    <div>
      <h2 className="font-bold">Customer : {counter}</h2>
      {displayList}
      <button onClick={() => handleCounter()}>Increment</button>
      <br />
      <hr />
      <br />
      <input type="text" onBlur={(e) => setUserDetails(e.target.value)}></input>
    </div>
  );
};

export default Customer;
