import React from "react";
import { useReducer } from "react";
import TodoList from "./TodoList";

// const initialState = [{ id: 0, name: "day" }];
const initialState = [];

// instead of enums , we are creating objects
export const TODOS_ACTIONS = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delete_task",
  RESET_TASK: "update_task",
};

// state management without redux
function reducer(state, action) {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    case TODOS_ACTIONS.DELETE_TASK:
      return state.filter((d) => d.id !== action.payload);

    case TODOS_ACTIONS.RESET_TASK:
      return init(action.payload);

    default:
      return state;
  }
}

// third arguement is required to manipulate/generate our initialstate
const init = (initialState) => {
  const result = [...initialState, { id: 1, name: "day" }];
  return result;
};
export default function ReducerSample() {
  // its very handy, used for complex state update mgmt where you have arrays or initial state
  // similar to usestate()
  // usereducer is used when you have complex state and if your state depends on previouState
  const [todos, dispatch] = useReducer(reducer, initialState, init);
  console.log(todos.map((todo) => todo.name));

  return (
    <>
      <h1>Use Reducer Sample</h1>
      <p>To do list: {todos.length}</p>
      Add New Task:
      <br />
      <input
        type="text"
        onBlur={(e) =>
          dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: e.target.value })
        }
      />
      <button
        className="p-2"
        onClick={() =>
          dispatch({ type: TODOS_ACTIONS.RESET_TASK, payload: initialState })
        }
      >
        Reset
      </button>
      <br />
      <br />
      <hr />
      <br />
      <TodoList data={todos} dispatch={dispatch} />
    </>
  );
}
