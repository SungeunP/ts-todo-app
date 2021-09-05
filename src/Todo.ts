class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(
    title: string,
    completed: boolean,
    ) {
    this.id = getIndex();
    this.title = title;
    this.completed = completed;
  }
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

// Index
let todoIndex = 0
const getIndex = () => {
  return todoIndex++
}

export default Todo