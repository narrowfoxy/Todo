import { debounce } from "lodash";

type searchComponentType = {
  onSearchChange: (inputElement: string) => void;
};

const SearchComponent = ({ onSearchChange }: searchComponentType) => {
  return (
    <input
      className="border-2 border-gray-400"
      onChange={debounce((e) => onSearchChange(e.target.value), 1000)}
      type="search"
      name="search"
      id="search"
      placeholder="Search Todo"
    />
  );
};

export default SearchComponent;
