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
}

export type TTab = {
  id: number;
  icon: string;
  title: string;
  todos: Todo[];
}

// Index
let index = 0
const getIndex = () => {
  return index++
}

export default Tab