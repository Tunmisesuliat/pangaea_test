declare namespace IProductCard {
  export interface IProps {
    product: {
      title: string;
      price: number;
      image_url: string;
    };
    handleAddToCart: () => unknown;
    activeCurrency: string;
  }
}

export { IProductCard };
