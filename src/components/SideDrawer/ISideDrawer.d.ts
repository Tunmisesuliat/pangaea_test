declare namespace ISideDrawer {
  export interface IProps {
    visible: boolean;
    toggleSideDrawer: () => any;
    cart: Array;
    handleQuantity: (id, quantity) => any;
    currencies: Array;
    changeCurrency: (any) => any;
    activeCurrency: string;
    loading: boolean;
    getCartPriceTotal: () => any;
    removeCartItem: (id) => any;
  }

  export interface ICurrency {
    id: number;
    quantity: number;
    price: number;
    title: string;
    image_url: string;
  }
}

export { ISideDrawer };
