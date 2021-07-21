declare namespace IMiniBar {
  export interface IProps {
    filterOptions: Array;
    activeFilter: string;
    changeFilter: (e: any) => void;
  }
}

export { IMiniBar };
