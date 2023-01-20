let todoList = [
  {
    id: 1,
    name: "buy food",
    isDone: false,
    createdAt: new Date(1674188514601),
  },
  {
    id: 2,
    name: "clean table",
    isDone: true,
    createdAt: new Date(1674138514601),
  },
  { id: 3, name: "coding", isDone: false, createdAt: new Date() },
];

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={`${index}-${item.id}`}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
