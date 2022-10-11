import React, { useState } from "react";
import Tod from "./todoC";
import "./todos.css";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [td, setTd] = useState([]);

  let display;
  function handleChange(event) {
    setTd((x) => event.target.value);
  }
  const delet = (id) => {
    setTodo((todos) => {
      return todos.filter((x) => {
        return id !== x.id;
      });
    });
    console.log(id);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    let keyVal = Math.floor(Math.random() * 100000);
    setTodo((todos) => [{ id: keyVal, title: td, done: false }, ...todos]);
    setTd("");
  };
  let edit = (id) => {
    console.log(id);
  };

  let onclikeCB = (id) => {
    setTodo((todos) => {
      return todos.map((x) => {
        return x.id === id ? { ...x, done: !x.done } : x;
      });
    });
    console.log(todo);
  };
  let clear = () => {
    setTodo([])
  }

  display = todo.map((x) => {
    return (
      <Tod
        val={x.title}
        key={x.id}
        id={x.id}
        don={x.done}
        todo={todo}
        del={delet}
        onclikeCB={onclikeCB}
        // setTodo={setTodo}
        ed={edit}
      />
    );
  });

  return (
    <div className="top">
      <div className="inner">
        <br />
        <form onSubmit={handleSubmit}>
          <input
            className="imp"
            required
            onChange={handleChange}
            name="todo"
            value={td}
            type="text"
          />
          <button className="btnt">+</button>
          <br />
          <br />
        </form>
        <h2 className="tdclear">
          TodoList
          <button onClick={clear} className="btnt">clear</button>
        </h2>
        <div>{display}</div>
      </div>
    </div>
  );
}
