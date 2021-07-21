import styled from "styled-components";

export const BannerContainer: any = styled.div`
  width: 100%;
  padding: 0px 10%;
  margin-top: 80px;
  height: 30vh;
  font-family: "Rajdhani", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0px 30px;
    flex-flow: column;
    align-items: left;
    justify-content: space-around;
  }
  .left {
    text-align: left;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .main-heading {
    font-size: 60px;
    font-weight: 500;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  .other-heading {
    font-size: 23px;
    margin-top: 5px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  .select {
    outline: 0;
    width: 300px;
    line-height: normal;
    color: currentColor;
    height: 50px;
    font-size: 1rem;
    background: #fff;
    border: 1px solid #cdd1ce;
    border-radius: 0;
    padding-right: 2rem;
    padding-left: 1.25rem;
    padding-top: 2px;
    padding-bottom: 1px;
    @media screen and (max-width: 768px) {
      width: 320px;
    }
  }
`;
