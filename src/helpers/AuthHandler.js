import Cookies from "js-cookie";

//verifica se o usuário ja possui um cadastro
export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

//Utilizando cookies para lembrar senha
//if true expira em 999 dias
export const doLogin = (token, rememberPassword = false) => {
  if (rememberPassword) {
    Cookies.set("token", token, { expires: 999 });
  } else {
    Cookies.set("token", token);
  }
};

export const doLogout = () => {
  Cookies.remove("token");
};
