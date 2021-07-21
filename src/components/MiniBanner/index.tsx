import React from "react";
import { IMiniBar } from "./IMiniBar";
import { BannerContainer } from "./style";

const MiniBanner: React.FC<IMiniBar.IProps> = ({
  filterOptions,
  activeFilter,
  changeFilter,
}: IMiniBar.IProps) => {
  return (
    <BannerContainer>
      <div className="left">
        <div className="main-heading">All Products</div>
        <div className="other-heading">A 360° look at Lumin</div>
      </div>
      <div className="filter">
        <select value={activeFilter} onChange={changeFilter} className="select">
          {filterOptions?.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </BannerContainer>
  );
};

export default MiniBanner;
