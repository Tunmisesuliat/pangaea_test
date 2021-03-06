import styled from "styled-components";

export const ShopContainer: any = styled.div`
  background-color: #e2e6e3;
  font-family: "Rajdhani", sans-serif;

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 4rem;
    height: 100%;
    column-gap: 60px;

    @media screen and (max-width: 968px) {
      padding: 0rem;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
      padding: 3rem 0;
      column-gap: 0px;
    }

    &.d-flex {
      display: flex;
      min-height: 500px;
      align-items: center;
      justify-content: center;
    }

    .error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      text-align: center;
      font-size: 18px;
      padding: 30px;

      button {
        margin: 30px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid;
        outline: none;
        cursor: pointer;
      }
    }

    .product {
      padding: 3rem 0rem;
      text-align: center;
      display: grid;

      @media screen and (max-width: 768px) {
        padding: 10px;
      }

      .btn {
        background-color: rgb(75, 85, 72);
        color: #fff;
        outline: none;
        padding: 10px 20px;
        height: 45px;
        border: none;
        width: 190px;
        margin: 0 auto;
        cursor: pointer;
        margin-top: 20px;
        transition: background-color 300ms ease;
        font-size: 19px;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          height: auto;
          padding: 5px 0;
          width: 150px;
        }

        &:hover {
          background-color: #171a17;
        }
      }

      .product-name {
        font-size: 18px;
        width: 100%;
        margin: 10px 0;

        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      .product-price {
        font-size: 18px;
        width: 100%;

        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      .img-holder {
        justify-content: center;
        align-items: center;

        .product-image {
          height: 120px;
          max-width: 100%;
          object-fit: contain;

          @media screen and (max-width: 768px) {
            height: 60px;
          }
        }
      }
    }
  }
`;
