import Axios from 'axios'

import {redirectToLogin} from './redirectHook';

// This returns a promise, which gives the error object.
export function login(userData, history) {
    // var userData = {
    //   name: username,
    //   password: password
    // };

    return Axios.post('/api/users/login', userData)
      .then(res => {
        console.log('success ' + res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        history.push('/dashboard')
      }).catch((err) => {
        return JSON.parse(JSON.stringify(err.response.data));
      })
}

// This returns a promise, which gives the error object.
export function register(userData, history) {
  // var userData = {
  //   name: username,
  //   password: password,
  //   password2: password2,
  //   email: email,
  //   imageUrl: imageUrl
  // }
  return Axios.post('/api/users/register', userData)
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      history.push('/dashboard')
    }).catch(err => {
      return err.response.data;
    })
}

export function logoutUser(history) {
  Axios.get('/api/users/logout')
    .then(res => {
      localStorage.removeItem("user");
      history.push('/signin?loggedOut=true');
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
  
}

export function getAllUsers(history) {
  return Axios.get('/api/users/profile/all')
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}
