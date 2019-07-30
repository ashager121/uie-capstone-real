import Axios from 'axios'

import {redirectToLogin} from './redirectHook';

export function getDashboard(history) {
  // var userData = {
  //   name: username,
  //   password: password
  // };

  return Axios.get('/api/dashboard')
    .then(res => {
      if (!redirectToLogin(history, res)) {
        console.log('data: ' + JSON.stringify(res.data));
        return JSON.parse(JSON.stringify(res.data.data));
      }
    }).catch((err) => {
      console.log("err:" + JSON.stringify(err));
      return JSON.parse(JSON.stringify(err.response.data));
    })
}