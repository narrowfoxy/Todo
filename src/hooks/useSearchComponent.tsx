import React, { useEffect, useState } from "react";
import { TodoElementType } from "../types/todoTypes";
import SearchComponent from "../components/SearchComponent";

const useSearchComponent = (
  list: TodoElementType[]
): {
  component: React.ReactElement;
  searchedList: TodoElementType[];
} => {
  const [searchedList, setSearchList] = useState(list);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchList(list);
    onSearchChange(searchValue);
  }, [JSON.stringify(list)]);

  function onSearchChange (inputElement: string) {
    const searchedElements = list.filter((search: TodoElementType) => {
      return search.description.includes(inputElement);
    });

    setSearchList(searchedElements);
    setSearchValue(inputElement);
  };

  return {
    component: <SearchComponent onSearchChange={onSearchChange} />,
    searchedList: searchedList,
  };
};

export default useSearchComponent;
