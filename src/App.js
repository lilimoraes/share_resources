import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import Routes from "./Routes";

//MAIN PAGE
const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />

        <Footer />
      </Template>
    </BrowserRouter>
  );
};

//CONNECT REDUX
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return;
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
