import React from "react";
import { formatPrice } from "../../utils/helperMethods";
import { IProductCard } from "./IProductCard";

const ProductCard: React.FC<IProductCard.IProps> = ({
  product,
  handleAddToCart,
  activeCurrency,
}: IProductCard.IProps) => {
  const { title, price, image_url } = product;

  return (
    <div className="product">
      <div className="img-holder">
        <img src={image_url} alt="product" className="product-image" />
      </div>

      <div className="product-name">{title}</div>
      <div className="product-price">
        From {formatPrice(activeCurrency).format(price)}
      </div>
      <button className="btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
