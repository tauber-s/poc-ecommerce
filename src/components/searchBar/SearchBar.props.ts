import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  searchText: string;
  onSearchTextChange: (searchText: string) => void;
};
