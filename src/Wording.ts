export enum wording_type {
  create_todo = 'CREATE_TODO',
  create_tab = 'CREATE_TAB',
  todolist_placeholder = 'TODOLIST_PLACEHOLDER',
}

const getRandomWording = (items: string[]) => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**
 * Create tab wordings
 */
const createTabWording = [
  'Do handsome thing 😉',
  '💪 Work hard, Play hard 👊',
  'Design big plan 📄',
]
/**
 * Create todo wordings
 */
const createTodoWording = [
  'Do handsome thing 😉',
  '💪 Work hard, Play hard 👊',
  'Write down small plan 🧐',
]
/**
 * Todo list placeholder
 */
const todoListPHWording = [
  '😎 Great plan begins here',
  '😮 Make handsome todo',
  '🧐 Huh, you looks need to have fun thing',
]

export const getWording = (type: wording_type) => {
  switch(type) {
    case wording_type.create_todo:
      return getRandomWording(createTodoWording)

    case wording_type.create_tab:
      return getRandomWording(createTabWording)
    
    case wording_type.todolist_placeholder:
      return getRandomWording(todoListPHWording)
    
    default:
      return "Write content"
      
  }
}