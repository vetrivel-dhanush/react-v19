import { useSyncExternalStore } from 'react';
import { todoStore } from './todoStore';

const UseSyncExternalStoreExample = () => {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );
  return (
    <div>
      <button onClick={todoStore.addTodo}>Add</button>
      {todos.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default UseSyncExternalStoreExample;
