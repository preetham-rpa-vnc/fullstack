import cookie from "js-cookie";

export const authenticate = (user, next) => {
  console.log("user", user);
  const { user_profile_id, first_name, last_name, user_mobile, token } = user;
  setCookie("token", token);
  setLocalStorage("user", { user_profile_id, first_name, last_name, user_mobile });
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
