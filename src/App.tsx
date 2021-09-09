import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Todo, { ITodo } from 'Todo';
import './app.scss';
import Body from './components/body';
import Header from './components/header';

export interface Tab {
  icon: string;
  title: string;
  todos: Todo[];
}

const TODOS_DAILY_TASKS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]

const DEFAULT_DATA:Tab[] = [
  {
    icon: '💪',
    title: 'Daily tasks',
    todos: TODOS_DAILY_TASKS,
  },
  {
    icon: '📖',
    title: 'Daily tasks',
    todos: TODOS_DAILY_TASKS,
  },
  {
    icon: '🎞',
    title: 'Daily tasks',
    todos: TODOS_DAILY_TASKS,
  },

]

function App() {

  const [ showMenu, setShowMenu ] = useState(false)
  
  // All todo datas
  const [ tabs, setTabs ] = useState<Tab[]|null>(null)
  const [ tabSelection, setTabSelection ] = useState<Tab|null>(null)
  const updateTodos = (todos:Todo[]) => {
    if (tabSelection) {
      setTabSelection({...tabSelection,
        todos: todos,
      })
    }
  }
  // todos (current displayed)
  // const [ todos, setTodos ] = useState<Todo[]|null>()
  // const updateCheckedTodo = (id: number, updatedTodo: Todo) => { // Update current checked todo
  //   setTodos(todos.map((todo: Todo) => {
  //     if (id === todo.id) {
  //       return updatedTodo
  //     }
  //     return todo
  //   }))
  // }

  useEffect(() => {
    setTimeout(() => {
      setTabs(DEFAULT_DATA)
    }, 300)
  }, [])

  // On initialized `data` state
  useEffect(() => {
    if (tabs) {
      if (tabs[0]) { // If tab exist then, binding todos
        setTabSelection(tabs[0])
      }
    }
  }, [tabs])

  const deleteTodo = (id: number) => {
    if (tabSelection) {
      const { todos } = tabSelection
      updateTodos(todos.filter(todo => (todo.id !== id)))
    }
  }

  // On todo created in todo-dialog
  const onTodoCreated = (todo: ITodo) => {
    if (tabSelection) {
      const { todos } = tabSelection
      updateTodos([todo].concat(todos))
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
    if (tabSelection) {
      const { todos } = tabSelection
      const result = todos.map(todo => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo
        }
        return todo
      })
  
      updateTodos(result)
    }
  }

  const todos = tabSelection?.todos ?? null

  return (
    <div className="App">
      {
        tabs ? (<>
          <Header tab={tabSelection} />
          {todos ? (
            <Body todos={todos}
              onTodoCreated={onTodoCreated}
              onTodoDeleted={onTodoDeleted}
              onTodoEdited={onTodoEdited} />
          ) : (
            <Typography variant="h5" color="primary" style={{marginTop: '50px'}}> Try create group! </Typography>
          )}
        </>) : (
          <Typography variant="h4" color="primary">Loading ..</Typography>
        )
      }
    </div>
  );
}

export default App;
