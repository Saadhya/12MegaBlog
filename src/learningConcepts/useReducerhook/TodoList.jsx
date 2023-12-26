import { TODOS_ACTIONS } from "./ReducerSample";
import React from "react";

const TodoList = ({data, dispatch}) => {
  return (
    <div>
      <h2 className="text-md">Todo list::</h2>

      <div className="bg-gradient-to-t text-white-300">
        {data.map((todo) => (
            <li key={todo.id} className="text-white-100">
              {todo.name} :
              <button
                className="p-2 ml-3 bg-red-400"
                onClick={() =>
                  dispatch({
                    type: TODOS_ACTIONS.DELETE_TASK,
                    payload: todo.id,
                  })
                }
              >
                Remove
              </button>
            </li>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
