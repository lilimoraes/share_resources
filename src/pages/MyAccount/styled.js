import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 1px 0px #111;

    .area {
      display: flex;
      align-items: center;
      padding: 20px;
      max-width: 500px;

      .area--title {
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;

        .area-img {
          display: flex;
        }
      }

      .area--input {
        flex: 1;

        .input-img {
          margin-top: 20px;
        }

        input,
        textarea {
          font-family: "Nunito Sans", sans-serif;
          width: 100%;
          font-size: 18px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: 0;
          transition: all ease 0.4s;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        .check-box {
          width: 20px;
        }

        textarea {
          height: 120px;
        }

        button {
          border: 0;
          background: none;
          color: #000;
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          outline: 0;
          font-weight: bold;
          background-color: #ff8100;
          border-radius: 50px;
          color: #fff;
          padding: 15px 60px;

          &:hover {
            background-color: #e57706;
          }
        }
      }
    }
  }
`;
