import styled from "styled-components";

export const DrawerContainer: any = styled.div`
  position: fixed;
  right: -100%;
  height: 100vh;
  width: 50%;
  background: #f2f2ef;
  z-index: 5;
  transition: right 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86),
    opacity 0.4s ease-in-out 0.1s;
  opacity: 0;
  padding: 25px 15px;
  max-width: 100vw;
  font-family: "Rajdhani", sans-serif;
  backface-visibility: hidden;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  .d-flex {
    display: flex;

    .my-cart {
      text-align: center;
      width: 100%;
    }
  }

  &.visible {
    right: 0%;
    opacity: 1;
    top: 0;
    bottom: 0;
  }

  .cart-toggle-btn {
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgb(198, 204, 199);
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    outline: none;

    .icon {
      color: #000;
      height: 15px;
      width: 10px;
      fill: rgb(43, 46, 43);
    }
  }

  .select {
    margin: 20px 0;
    padding: 8px 13px 5px 10px;
    background: 100% 60%;
    width: 80px;
    background-color: #fff;
    border: none;
    outline: none;
  }

  .cart-text {
    font-size: 18px;
    text-align: center;
  }

  .cart {
    height: 72%;
    overflow: scroll;

    .cart-item {
      background: #fff;
      padding: 20px;
      position: relative;
      margin-bottom: 20px;
      position: relative;

      .item-title {
        font-size: 18px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      .close-icon {
        right: 15px;
        top: 10px;
        position: absolute;
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
      }

      .item-img {
        display: flex;
        justify-content: flex-end;
      }

      .cart-img {
        height: 70px;
        margin: 10px 0;
        text-align: center;

        @media screen and (max-width: 480px) {
          height: 50px;
        }
      }

      .d-flex {
        display: flex;
        align-items: center;
        position: relative;
      }

      .item-quantity-section {
        width: 80px;
        height: 30px;
        border: 0.5px solid #bcbcbc;
        font-size: 13px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        // justify-self: flex-start !important;

        span {
          font-weight: 500;
          font-size: 17px;
        }

        button {
          cursor: pointer;
          outline: none;
          padding: 6px;
          display: block;
          font-weight: 500;
          font-size: 17px;
          outline: none;
          border: none;
          background: transparent;
        }
      }

      .item-amount {
        justify-self: center;
        align-self: start;
        font-weight: 500;
        position: absolute;
        left: 50%;
        top: 25%;
      }
    }
  }

  .check-out-section {
    .subtotal {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;

      span {
        font-weight: 500;
        margin: 20px 0;
        font-size: 16px;
      }

      &::before {
        content: " ";
        position: absolute;
        // top: -20px;
        left: 0;
        border-top: 2px solid grey;
        width: 100%;
      }
    }

    .checkout {
      width: 100%;
      margin: 10px auto;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      background-color: rgb(75, 85, 72);
      outline: none;
      color: #fff;
      text-align: center;
    }
  }
`;
