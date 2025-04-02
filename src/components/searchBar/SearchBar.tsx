'use client';

import { SearchBarProps } from "./SearchBar.props";

const SearchBar = ({ searchText, onSearchTextChange, className, ...props }: SearchBarProps) => {
  return (
    <form className={className} {...props}>
      <input 
        type="text" 
        value={searchText} 
        placeholder="Search..." 
        onChange={(e) => onSearchTextChange(e.target.value)}  
      />
    </form>
  );
};

export default SearchBar;
