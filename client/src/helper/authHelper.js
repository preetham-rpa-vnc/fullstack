import cookie from "js-cookie";

export const authenticate = (responseData, next) => {
  console.log("user", responseData);
  const { name, mobile, token } = responseData;
  setCookie("token", token);
  setLocalStorage("user", { name, mobile });
  next(); 
};

export const setLocalStorage = (key, value) => {
  console.log("window", window);
  localStorage.setItem(key, JSON.stringify(value));
};

export const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1,
  });
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const isAuth = () => {
  const cookieChecked = getCookie("token");
  if (cookieChecked) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  } 
};

export const removeCookie = (key) => {
  console.log("################", key);
  cookie.remove(key, { expires: 1 });
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const signout = () => {
  removeCookie("token");
  removeLocalStorage("user");
};
