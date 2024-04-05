import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
import { FiUser } from "react-icons/fi";

import { isLogged, doLogout } from "../../../helpers/AuthHandler";

const Header = () => {
  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = "/";
  };

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              style={{ width: '150px', marginTop: '10px' }} // Aplicando estilos inline
            />
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">
                    <span className="user-icon">
                      <FiUser />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                  Insert ad
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">
                    <span className="user-icon">
                      <FiUser />
                    </span>
                    Signin
                  </Link>
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
                <li>
                  <Link to="/signin" className="button">
                  Announce
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
