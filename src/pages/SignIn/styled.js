import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 40px;
    box-shadow: 0px 1px 3px 0px #999;
    width:460px;
    margin:0 auto;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 80px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
      }

      .area--input {
        flex: 1;

        input {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: 0;
          transition: all ease 0.4s;
          height:40px;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        .check {
          width: 15px;
          
        }

        button {
          background-color: #e57706;
          border: 0;
          outline: 0;
          width:350px;
          padding: 15px 50px;
          border-radius: 25px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
          margin: 0 auto;

          &:hover {
            background-color: #ef8821;
          }

          
        }

        .button-face{
            background-color:#4e6aa3;

            &:hover{
              background-color:#4f91f9;
            }
          }


          .button-google{
            background-color:#5591f5;
           
            &:hover{
              background-color:#93b5ed;
            }
          }
      }
    }
  }
`;
