import { CircularProgress, Typography } from '@material-ui/core';
import TabList from 'components/TabList';
import SideBar from 'components/SideBar';
import React, { useEffect, useState } from 'react';
import Tab, { TTab } from 'types/Tab';
import Todo, { ITodo } from 'types/Todo';
import styles from './app.module.scss';
import Body from './components/body';
import Header from './components/header';
import { Settings } from '@material-ui/icons';
import Button from 'styled-mui-components/Button';
import SettingDialog from 'components/SettingDialog';

const TODOS_DAILY_TASKS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]
const TODOS_STUDY: ITodo[] = [
  new Todo('강의 듣기', false),
]
const TODOS_GAMES: ITodo[] = [
  new Todo('Marvel\'s Spider-Man', false),
  new Todo('Last of us', false),
  new Todo('롤 그마', false),
  new Todo('몬헌', false),
]

const TABS:TTab[] = [
  new Tab('💪', 'Daily tasks', TODOS_DAILY_TASKS),
  new Tab('📖', 'Study', TODOS_STUDY),
  new Tab('🎮', 'Games', TODOS_GAMES),
]

function App() {

  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)
  
  // All todo datas
  const [ tabs, setTabs ] = useState<TTab[]|null>(null)
  const [ tabSelection, setTabSelection ] = useState<TTab|null>(null)
  const updateTodos = (todos:Todo[]) => {
    if (tabSelection) {
      setTabSelection({...tabSelection,
        todos: todos,
      })
    }
  }
  
  const [ showSettings, setShowSettings ] = useState<boolean>(false)

  useEffect(() => {
    if (!tabs) { // When initialize
      setTimeout(() => {
        setTabs(TABS)
        if (TABS[0]) { // If tab exist then, binding todos
          setTabSelection(TABS[0])
        }
      }, 300)
    }
  }, [])

  // On initialized `data` state
  useEffect(() => {
    
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
  const onTabClicked = () => {
    setShowSidebar(true)
  }

  // On SideBar closed
  const onSidebarClose = () => {
    setShowSidebar(false)
  }

  // On tab clicked
  const onTabClick = (tab: TTab) => {
    if (tabs) {
      const { id:currentTabId } = tabSelection ?? {}
      const updatedTabs = tabs.map(_tab => (
        _tab.id === currentTabId ? tabSelection ?? _tab : _tab
      ))

      setTabs(updatedTabs)
      setTabSelection(tab)
    }
    setShowSidebar(false)
  }

  // On tab create from TabList component
  const onTabCreate = (tab: TTab) => {
    setShowSidebar(false)
    setTabs([tab].concat(tabs ?? []))
    setTabSelection(tab)
  }

  // On edit title of tab
  const onEditTitle = (editedTitle: string) => {
    if (tabs && tabSelection) {
      const updatedTab = {...tabSelection,
        title: editedTitle,
      }
      setTabs(tabs.map(tab => (  // Update state tabs
        tab.id === tabSelection.id ? updatedTab : tab
      )))
      setTabSelection(updatedTab)
    }
  }

  // On edit icon of tab
  const onEditIcon = (editedIcon: string) => {
    if (tabs && tabSelection) {
      const updatedTab = {...tabSelection,
        icon: editedIcon,
      }
      setTabs(tabs.map(tab => (  // Update state tabs
        tab.id === tabSelection.id ? updatedTab : tab
      )))
      setTabSelection(updatedTab)
    }
  }

  const onSettingsConfirm = () => {
    
  }

  const todos = tabSelection?.todos ?? []

  return (<>
    <div className={styles.App}>{tabs ? (<>
      <Header tab={tabSelection}
        onTabClick={onTabClicked}
        onEditTitle={onEditTitle}
        onEditIcon={onEditIcon} />
      {todos && (
        <Body todos={todos}
          onTodoCreated={onTodoCreated}
          onTodoDeleted={onTodoDeleted}
          onTodoEdited={onTodoEdited} />
      )}
      {/* <Typography variant="h5" color="primary" style={{marginTop: '50px'}}> Try create group! </Typography> */}
    </>) : (
      <CircularProgress />
      // <Typography variant="h4" color="primary">Loading ..</Typography>
    )}
    
    <SideBar open={showSidebar}
      onClose={onSidebarClose}>
      {tabs && (
        <TabList open={showSidebar}
          tabs={tabs}
          onTabClick={onTabClick}
          onTabCreate={onTabCreate} />
      )}
      <Button className={styles.setting_btn} variant="contained" color="primary"
        onClick={() => setShowSettings(true)} >
        <Settings fontSize="medium" />
      </Button>
    </SideBar>

    <SettingDialog open={showSettings}
      onClose={() => setShowSettings(false)}
      onConfirm={onSettingsConfirm} />

    </div>
  </>);
}

export default App;
