class Todo {
  id: number;
  title: string;
  completed: boolean;
  updateCompleted = (value: boolean) => {
    this.completed = value
  };

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
  updateCompleted: any;
}

// Index
let todoIndex = 0
const getIndex = () => {
  return todoIndex++
}

export default Todo