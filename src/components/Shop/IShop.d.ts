declare namespace IShop {
  export interface IProps {
    products: Array;
    handleAddToCart: (product) => unknown;
    loading: boolean;
    activeCurrency: string;
    error: ApolloError | undefined;
  }
}

export { IShop };
