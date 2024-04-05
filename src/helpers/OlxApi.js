import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://13.51.238.223:3333";

//REQUISICAO POST FILE
const apiFetchFile = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.append("token", token);
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    body,
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

//REQUISICAO POST Ad
const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};


//REQUISICAO
const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

//REQUISICAO PUT
const apiFetchPut = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/";
    return;
  }

  return json;
};


const OlxAPI = {
  login: async (email, password) => {
    const json = await apiFetchPost("/user/signin", { email, password });
    return json;
  },

  register: async (name, email, password, stateLoc) => {
    const json = await apiFetchPost("/user/signup", {
      name,
      email,
      password,
      state: stateLoc,
    });
    return json;
  },

  getStates: async () => {
    const json = await apiFetchGet("/states");
    return json.states;
  },

  getCategories: async () => {
    const json = await apiFetchGet("/categories");
    return json.categories;
  },

  getAds: async (options) => {
    const json = await apiFetchGet("/ad/list", options);
    return json;
  },

  getAd: async (id, other = false) => {
    const json = await apiFetchGet("/ad/item", { id, other });
    return json;
  },

  addAd: async (fData) => {
    const json = await apiFetchFile("/ad/add", fData);
    return json;
  },

  //BUSCAR DADOS DO USUARIO CADASTRADO
  getToken: async () => {
    
    const json = await apiFetchGet("/user/me");
    return json;
  },

  unRegister: async () => {
    
    const json = await apiFetchPut("/user/me");
    return json;
  },



};

export default () => OlxAPI;
