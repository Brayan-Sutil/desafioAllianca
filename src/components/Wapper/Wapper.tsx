import { useTodos } from "../../Context/TodoContext";
import ComponentAlert from "../Alert/ComponentAlert";
import TodoList from "../TodoList/TodoList";

const Wapper = () => {
  const { onAlert } = useTodos();
  return (
    <>
      <TodoList />
      <ComponentAlert
        open={onAlert}
      />
    </>
  );
};

export default Wapper;