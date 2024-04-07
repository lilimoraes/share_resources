import React, { useState } from "react";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";

import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  //USESTATE DECLARATIONS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  //FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = "/";
    }

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Access your account</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleSubmit}>

        <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button className="button-face" disabled={disabled}>Login with Facebook</button>
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button className="button-google" disabled={disabled}>Sign in with Google</button>
            </div>            
          </label>

          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Password</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Remember Password</div>
            <div className="area--input ">
              <input
                className="check"
                type="checkbox"
                disabled={disabled}
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Signin</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
