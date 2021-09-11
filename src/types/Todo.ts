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
let index = 0
const getIndex = () => {
  return index++
}

export default Todo