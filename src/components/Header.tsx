import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Header = () => {
  const { todoHeader, updateHeader } = useContext(TodoContext);

  function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code == "Enter") {
      event.currentTarget.blur();
    }
  }

  return (
    <div className="text-2xl rounded-t-md bg-blue-200 h-[80px] border-t-8 border-t-orange-600 border-b-2">
      <input
        className="w-full h-full pl-8 border-none outline-none"
        onKeyUp={onKeyPress}
        onChange={(e) => updateHeader(e.target.value)}
        value={todoHeader}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
      />
    </div>
  );
};

export default Header;
