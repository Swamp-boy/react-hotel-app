export type TNavBarSubItem = {
  label: string;
  id: string;
};

export type TNavBarItem = {
  label: string;
  id: string;
  items?: TNavBarSubItem[];
};
