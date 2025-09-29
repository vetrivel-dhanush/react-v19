let todos: { id: string; name: string }[] = [];
let listeners: (() => void)[] = [];

export const todoStore = {
  getSnapshot() {
    return todos;
  },
  subscribe(listener: () => void) {
    listeners.push(listener);
    return () => (listeners = listeners.filter((l) => l !== listener));
  },
  addTodo() {
    todos = [
      ...todos,
      { id: Math.random().toString(), name: `Todo #${todos.length + 1}` },
    ];
    // todos.push({
    //   id: Math.random().toString(),
    //   name: `Todo #${todos.length + 1}`,
    // });
    emitChange();
  },
};

export function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
