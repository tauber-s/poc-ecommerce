export interface SearchBarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  searchText: string;
  setSearchText: (searchText: string) => void;
};
