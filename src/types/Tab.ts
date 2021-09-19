import Todo from "./Todo";

class Tab {
  id: number;
  icon: string;
  title: string;
  todos: Todo[];

  constructor(
    icon: string = "📃",
    title: string = "그룹 이름 없음",
    todos: Todo[] = [],
  ) {
    this.id = getIndex()
    this.icon = icon
    this.title = title
    this.todos = todos
  }

  setTitle(updatedTitle: string) {
    this.title = updatedTitle
    return this
  }
}

export type TTab = {
  id: number;
  icon: string;
  title: string;
  todos: Todo[];
  setTitle: (updatedTitle: string) => void;
}

// Index
let index = 0
const getIndex = () => {
  return index++
}

export default Tab