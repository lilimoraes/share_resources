import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #6e0ad6;
  border-bottom: 1 px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 5px;

    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #4a5055;
        margin-right: 20px;
        font-size: 18px;
      }

      input {
        flex: 1;
        padding: 0;
      }

      select {
        width: 100px;
      }

      button {
        background-color: #fff;
        font-size: 20px;
        border: 0;
        border-radius: 2px;
        color: #4a5055;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }

  .categoryList {
    display: flex;

    flex-wrap: wrap;
    margin-top: 40px;

    .categoryItem {
      display: flex;
      justify-content: center;
      width: 25%;
      align-items: center;
      color: #fff;
      text-decoration: none;
      height: 50px;
      margin-bottom: 30px;

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width:600px) {

    .searchBox form {
      flex-direction:column;
      

      input {
        padding:20px;
        margin:10px auto;
        border:1px solid #ddd;
      
      }

      select {
        width:50%;
        margin:10px auto;
        border:1px solid #ddd;
        
      }
    }

    .categoryList .categoryItem {
      width:50%;
    }
  }
`;

export const PageArea = styled.div`

  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 20%;
    }
  }
  .seeAllLink {
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;
  }
  @media (max-width:600px) {
    h2 {
      margin:10px;
    }
    .list .aditem {
      width:50%;
    }

    .seeAllLink{
      margin:10px;
    }
  }
`;

export const AreaGalery = styled.div`
  padding: 10px 0;
  background-color: #f6f6f6;

  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 20%;
    }
  }

  @media (max-width:600px) {
    h2 {
      margin:10px;
    }
    .list .aditem {
      width:50%;
    }
  }
`;
