import styled from "styled-components";

export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  width: 800px;

  .box {
    background-color: #fff;
    border-radius: 5px;

    margin-bottom: 20px;
  }
  .box--padding {
    padding: 10px;
  }
  .leftSide {
    flex: 1;
    margin-right: 20px;

    small {
      color: #999;
    }

    .adImage {
      background-color: #020222;
      width: 540px;
      height: 400px;
      border-radius: 10px;

      .each-slide img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 400px;
        margin-left: 70px;
      }
    }
    .aInfo {
      flex: 1;
      .adName {
        margin-bottom: 20px;
        h2 {
          margin: 0;
          margin-top: 20px;
        }
        small {
          color: #999;
        }
      }
      .adDescription {
        .price-info {
          font-size: 24px;
          color: #4a5055;
          margin-bottom: 10px;
        }
        small {
          color: #999;
        }
      }
    }
  }
  .rightSide {
    .priceNegotiable {
      box-sizing: border-box;
      display: flex;
      background-color: rgb(110, 10, 214);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 10px 0px 10px 8px;
      color: #fff;
      font-size: 30px;
    }

    .price span {
      box-sizing: border-box;
      display: flex;
      background-color: rgb(110, 10, 214);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 10px 0px 10px 8px;
      color: #fff;
      font-size: 30px;
    }

    .contactSellerLink {
      background-color: #ff8100;
      color: #fff;
      width: 220px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;

      &:hover {
        background-color: #f78323;
      }
    }

    .createdBy {
      text-align: center;
      background-color: #f9f9f9;
      border: 1px solid #d8d8d8;
    }

    .createdBy small {
      display: block;
      color: #999;
      margin-top: 10px;
    }
    .box-info {
      padding: 10px;
      text-align: center;
      background-color: #f9f9f9;
      border: 1px solid #d8d8d8;
      border-radius: 5px;

      span {
        font-size: 14px;
      }
    }
  }
`;

export const OthersArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;

    .aditem {
      width: 25%;
    }
  }
`;

export const BreadChumb = styled.div`
  font-size: 13px;
  margin-top: 20px;

  a {
    display: inline-block;
    margin: 0 5px;
    text-decoration: #000;
  }
`;
