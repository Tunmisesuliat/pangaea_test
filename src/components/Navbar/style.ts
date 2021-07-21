import styled from "styled-components";

export const NavContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid rgb(202, 202, 202);
  align-items: center;
  padding: 0px 50px;
  position: fixed;
  top: 0;
  width: 100vw;

  &:first-child {
    @media screen and (max-width: 468px) {
      padding: 0px 30px;
    }
  }

  .left-links {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }

  .brand-name {
    width: 140px;

    .brand-img {
      width: 100%;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;

    .link {
      position: relative;
      align-self: center;
      list-style: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
      @media screen and (max-width: 468px) {
        display: none;
      }

      &:not(:first-child) {
        margin-left: 20px;
      }

      &:first-child {
        a {
          text-decoration: none;
          color: inherit;
        }
        @media screen and (max-width: 468px) {
          display: none;
        }
      }

      .cart {
        width: 25px;
        height: 25px;
      }

      .cart-item-count {
        position: absolute;
        right: -15px;
        top: 0;
      }
    }
  }
`;
