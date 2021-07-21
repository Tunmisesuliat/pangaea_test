import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query ($currency: Currency!) {
    products {
      id
      image_url
      title
      price(currency: $currency)
    }
  }
`;

export const GET_CURRENCIES_QUERY = gql`
  query {
    currency
  }
`;
