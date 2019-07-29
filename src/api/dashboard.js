import Axios from 'axios'


export function getDashboard() {
  // var userData = {
  //   name: username,
  //   password: password
  // };

  return Axios.get('/api/dashboard')
    .then(res => {
      console.log('data: ' + JSON.stringify(res.data));
      return JSON.parse(JSON.stringify(res.data.data));
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}