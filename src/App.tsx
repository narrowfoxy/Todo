import Todo from "./components/Todo";
import TodoContextWrapper from "./contexts/TodoContext";

function App() {
  return (
    <>
      <TodoContextWrapper>
        <Todo />
      </TodoContextWrapper>
    </>
  );
}

export default App;
