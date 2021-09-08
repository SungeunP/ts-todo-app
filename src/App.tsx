import React, { useState } from 'react';
import Todo, { ITodo } from 'Todo';
import './app.scss';
import Body from './components/body';
import Header from './components/header';

const DEFAULT_TODOS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]

function App() {

  const [ showMenu, setShowMenu ] = useState(false)
  
  // todos
  const [ todos, setTodos ] = useState<Todo[]>(DEFAULT_TODOS)
  const updateCheckedTodo = (id: number, updatedTodo: Todo) => { // Update current checked todo
    setTodos(todos.map((todo: Todo) => {
      if (id === todo.id) {
        return updatedTodo
      }
      return todo
    }))
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  }

  // On todo created in todo-dialog
  const onTodoCreated = (todo: ITodo) => {
    if (todos) {
      setTodos(todos.concat([todo]))
    }
  }

  // // On todo check changed
  // const onTodoChecked = (id: number, value: boolean) => {
  //   updateCheckedTodo(id, value)
  // }

  // On todo delete
  const onTodoDeleted = (id: number) => {
    deleteTodo(id)
  }

  const onTodoEdited = (updatedTodo: Todo) => {
    const result = todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo
      }
      return todo
    })

    setTodos(result)
  }

  return (
    <div className="App">
      <Header />
      <Body todos={todos}
        onTodoCreated={onTodoCreated}
        onTodoDeleted={onTodoDeleted}
        onTodoEdited={onTodoEdited} />
    </div>
  );
}

export default App;
