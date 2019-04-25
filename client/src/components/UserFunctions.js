import axios from "axios";

export const register = newUser => {
  return axios
    .post("http://localhost:3001/user/register", {
      login: newUser.login,
      password: newUser.password
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err.response;
    });
};

export const login = user => {
  return axios
    .post("http://localhost:3001/user/login", {
      login: user.login,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("token", JSON.stringify(res.data));

      return JSON.stringify(res.data);
    })
    .catch(err => {
      return err.response;
    });
};

export const getProduct = () => {
  return axios.get("http://localhost:3001/user/product").then(res => {
    return res.data;
  });
};

export const order = (order, user) => {
  return axios
    .post("http://localhost:3001/user/order", {
      login: user,
      order: order
    })
    .then(res => {
      console.log(order);
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    });
};

//"proxy": "http://localhost:3001"
