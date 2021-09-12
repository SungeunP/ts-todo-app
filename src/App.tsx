import { Typography } from '@material-ui/core';
import TabList from 'components/TabList';
import SideBar from 'components/SideBar';
import React, { useEffect, useState } from 'react';
import Tab from 'types/Tab';
import Todo, { ITodo } from 'types/Todo';
import styles from './app.module.scss';
import Body from './components/body';
import Header from './components/header';

const TODOS_DAILY_TASKS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]

const TABS:Tab[] = [
  new Tab('💪', 'Daily tasks', TODOS_DAILY_TASKS),
  new Tab('📖', 'Daily tasks', TODOS_DAILY_TASKS),
  new Tab('🎃', 'Daily tasks', TODOS_DAILY_TASKS),
]

function App() {

  const [ showMenu, setShowMenu ] = useState<boolean>(false)
  
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
      setTabs(TABS)
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
  const onTodoCreated = (todo: Todo) => {
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

  // On todo edited
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

  // On menu clicked in header
  const onMenuClicked = () => {
    setShowMenu(true)
  }

  // On SideBar closed
  const onSidebarClose = () => {
    setShowMenu(false)
  }

  // On tab clicked
  const onTabClick = (tab: Tab) => {
    console.log('Clicked tab :>> ', tab);
  }

  const todos = tabSelection?.todos ?? null

  return (<>
    <div className={styles.App}>{tabs ? (<>
      <Header tab={tabSelection}
        onMenuClick={onMenuClicked} />
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
    )}

    
    <SideBar open={showMenu}
      onClose={onSidebarClose}>
      {tabs ? (
        <TabList open={showMenu} tabs={tabs}
          onTabClick={onTabClick} />
      ) : showMenu ? (
        <Typography>Loading ..</Typography>
      ) : <></>}
    </SideBar>

    </div>
  </>);
}

export default App;
