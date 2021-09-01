import React from "react";
import { useState, useEffect, useCallback } from "react";

interface Iinput {
  input: string;
}

interface ITodoItem {
  idx: number;
  todo: string;
  isDelete: boolean;
  onDelete: () => void;
}

interface ITodoList {
  todoList: ITodoItem[];
}

function TodoList() {
  const mk = { fontSize: "16px", color: "hotpink" };
  const mc = { fontSize: "20px", color: "green" };

  const [input, setInput] = useState<Iinput>({input: ''});
  const [iTodoItem, setTodoItem] = useState<ITodoItem>({
      idx: 1,
      todo: '아지산책',
      isDelete: false,
      onDelete: () => {}
  })
  useEffect(() => {
      console.log('render 이후 발생')
  }, [])
  const onSubmit = () => {

  };
  const onDelete = () => {

  }
  const handleInput = () => {

  }
  return (
    <div style={mk}>
      TodoList.tsx document 9:17 <p></p>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={input.input}/>
          <button style={mc} type="submit">추가</button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;
