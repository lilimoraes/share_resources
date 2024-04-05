import styled from "styled-components";

export const HeaderArea = styled.div`
  

  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1040px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 80px;
    font-weight: bold;
    font-family: 'Suravaram', serif;

    .logo-1,
    .logo-2,
    .logo-3, 
    .logo-4 {
      font-size: 36px;
      font-weight: bold;
    }
    .logo-1 {
      color: #6e0ad6;
    }
    .logo-2 {
      color: #8ce563;
    }
    .logo-3 {
      color: #F28000;
    }
    .logo-4 {
      color: #6e0ad6;
    }
  }

  .user-icon {
    margin-right: 10px;
  }

  nav {
    padding: 10px 0;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 60px;
    }
    li {
      margin: 0 20px;

      a,
      button {
        border: 0;
        background: none;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        outline: 0;

        &:hover {
          color: #6e0ad6;
        }

        &.button {
          font-weight: bold;
          background-color: #ff8100;
          border-radius: 50px;
          color: #fff;
          padding: 10px 35px;
        }
        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }

  @media (max-width:600px) {
    height:auto;
    
    .container {
      flex-direction:column;
    }

    .logo{
      justify-content:center;
      margin:20px 0;
    }
    nav ul {
      flex-direction:column;
      height:auto;
    }

    nav li {
      margin: 10px 20px;
    }

  }
`;
