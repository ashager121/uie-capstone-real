import Axios from 'axios'
import setAuthToken from '../util/setAuthToken'
import jwt_decode from "jwt-decode";

// This returns a promise, which gives the error object.
export function login(userData, history) {
    // var userData = {
    //   name: username,
    //   password: password
    // };

    return Axios.post('/api/users/login', userData)
      .then(res => {
        console.log('success ' + res);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        localStorage.setItem("user", JSON.stringify(decoded));
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
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      localStorage.setItem("user", JSON.stringify(decoded));
      history.push('/dashboard')
    }).catch(err => {
      return err.response.data;
    })
}

export function logoutUser(history) {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
  setAuthToken(false);
  history.push('/signin');
}