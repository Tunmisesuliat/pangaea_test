import styled from "styled-components";

export const BannerContainer: any = styled.div`
  width: 80%;
  padding: 0px 50px;
  margin: 80px 0;
  font-family: "Rajdhani", sans-serif;

  @media screen and (max-width: 468px) {
    padding: 0px 30px;
    margin: 50px 0;
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
`;
