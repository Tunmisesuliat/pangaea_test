import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from 'react-use';
import BackDrop from '../components/Backdrop';
import MiniBanner from '../components/MiniBanner';
import Navbar from '../components/Navbar';
import Shop from '../components/Shop';
import SideDrawer from '../components/SideDrawer';
import { GET_CURRENCIES_QUERY, GET_PRODUCTS_QUERY } from '../queries';

const LandingPage = () => {
  const [activeCurrency, setActiveCurrency] = useState<string>('USD');
  const [currenciesOptions, setCurrenciesOptions] = useState<string[]>(['USD']);
  const [sideDrawerVisibility, setSideDrawerVisibility] =
    useState<boolean>(false);
  const [cart, setCart] = useState<Record<string, number>[]>([]);

  const {
    data: products,
    loading: loadingProducts,
    error,
  } = useQuery(GET_PRODUCTS_QUERY, {
    variables: { currency: activeCurrency },
  });

  const { data: currencies } = useQuery(GET_CURRENCIES_QUERY);

  useUpdateEffect(() => {
    setCurrenciesOptions(currencies?.currency);
  }, [currencies]);

  function toggleSideDrawer() {
    setSideDrawerVisibility(!sideDrawerVisibility);
  }

  function addToCart(product: any) {
    const updatedCart: Record<string, number>[] = [...cart];
    const foundItem: any = updatedCart.find((el: any) => el.id === product.id);
    if (foundItem) {
      handleQuantity(foundItem.id, foundItem.quantity + 1);
      return setSideDrawerVisibility(true);
    }
    updatedCart.push({ quantity: 1, ...product });
    setSideDrawerVisibility(true);
    setCart([...updatedCart]);
  }

  function handleQuantity(id: number, quantity: number) {
    if (quantity === 0) {
      return removeCartItem(id);
    }

    const cartItem: any = cart.find(
      (item: Record<string, number>) => item.id === id
    );
    cartItem.quantity = quantity;
    setCart([...cart]);
  }

  function changeCurrency(e: any) {
    setActiveCurrency(e.target.value);
  }

  function getCartPriceTotal() {
    return cart.reduce(
      (acc: number, element: any) => acc + element.quantity * element.price,
      0
    );
  }

  function removeCartItem(id: number) {
    setCart(cart.filter((item: any) => item.id !== id));
  }

  function getTotalItemsInCart() {
    return cart.reduce(
      (acc: number, element: any) => acc + element.quantity,
      0
    );
  }

  useEffect(() => {
    setCart([...calculateCartItemPrice()]);
  }, [products]);

  function calculateCartItemPrice() {
    return cart.map((cartItem: any) => ({
      ...cartItem,
      price: products?.products?.find(
        (product: any) => product.id === cartItem.id
      ).price,
    }));
  }

  return (
    <>
      <Navbar
        toggleSideDrawer={toggleSideDrawer}
        getTotalItemsInCart={getTotalItemsInCart}
      />
      <SideDrawer
        visible={sideDrawerVisibility}
        toggleSideDrawer={toggleSideDrawer}
        cart={cart}
        handleQuantity={handleQuantity}
        currencies={currenciesOptions}
        changeCurrency={changeCurrency}
        activeCurrency={activeCurrency}
        loading={loadingProducts}
        getCartPriceTotal={getCartPriceTotal}
        removeCartItem={removeCartItem}
      />
      <BackDrop
        toggleSideDrawer={toggleSideDrawer}
        sideDrawerVisibility={sideDrawerVisibility}
      />
      <MiniBanner />
      <Shop
        activeCurrency={activeCurrency}
        products={products?.products}
        handleAddToCart={addToCart}
        loading={loadingProducts}
        error={error}
      />
    </>
  );
};

export default LandingPage;
