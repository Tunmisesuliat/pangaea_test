import React from 'react';
import { formatPrice } from '../../utils/helperMethods';
import Spinner from '../Spinner';
import { ISideDrawer } from './ISideDrawer';
import { DrawerContainer } from './style';

const SideDrawer: React.FC<ISideDrawer.IProps> = ({
  visible,
  toggleSideDrawer,
  cart,
  handleQuantity,
  currencies,
  changeCurrency,
  activeCurrency,
  loading,
  getCartPriceTotal,
  removeCartItem,
}: ISideDrawer.IProps) => {
  return (
    <DrawerContainer className={`${visible ? 'visible' : ''}`}>
      <div className="d-flex">
        <button
          className="cart-toggle-btn"
          type="button"
          onClick={toggleSideDrawer}
        >
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 492.004 492.004"
          >
            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path>
          </svg>
        </button>
        <div className="my-cart">Your Cart</div>
      </div>
      <select
        value={activeCurrency}
        onChange={changeCurrency}
        className="select"
      >
        {currencies &&
          currencies?.map((currency: any) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>

      <div className="cart">
        {cart.length < 1 && (
          <div className="cart-text">There are no items in your cart.</div>
        )}

        {cart.length > 0 && loading ? (
          <Spinner />
        ) : (
          cart?.map((ct: ISideDrawer.ICurrency) => {
            return (
              <div key={ct.id} className="cart-item">
                <button
                  className="close-icon"
                  onClick={() => removeCartItem(ct.id)}
                >
                  X
                </button>
                <div className="item-title">{ct.title}</div>

                <div className="item-img">
                  <img src={ct.image_url} alt="cart-img" className="cart-img" />
                </div>
                <div className="d-flex">
                  <div className="item-quantity-section">
                    <button
                      onClick={() => handleQuantity(ct.id, ct.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{ct.quantity}</span>
                    <button
                      onClick={() => handleQuantity(ct.id, ct.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-amount">
                    {formatPrice(activeCurrency).format(
                      ct.quantity * ct.price || 0
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {cart.length < 1 ? (
        ''
      ) : (
        <>
          {loading ? (
            ''
          ) : (
            <div className="check-out-section">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>
                  {formatPrice(activeCurrency).format(getCartPriceTotal() || 0)}
                </span>
              </div>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          )}
        </>
      )}
    </DrawerContainer>
  );
};

export default SideDrawer;
