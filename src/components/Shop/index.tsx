import { array, bool, func, object, string } from 'prop-types';
import React from 'react';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';
import { IShop } from './IShop';
import { ShopContainer } from './style';

const Shop: React.FC<IShop.IProps> = ({
  products,
  handleAddToCart,
  loading,
  activeCurrency,
  error,
}: IShop.IProps) => {
  return (
    <ShopContainer id="shop">
      <div className={`products ${loading || error ? 'd-flex' : ''}`}>
        {error && (
          <div className={`${error ? 'error' : ''}`}>
            <div>
              An Unknown Error occured!. <br /> Kindly refresh the page
            </div>
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          products?.map(
            (product: {
              id: number;
              title: string;
              price: number;
              image_url: string;
            }) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={() => handleAddToCart(product)}
                activeCurrency={activeCurrency}
              />
            )
          )
        )}
      </div>
    </ShopContainer>
  );
};

export default Shop;
