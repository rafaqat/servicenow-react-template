import axios from 'axios';
import paths from './paths';

class ServiceNow {
  init() {
    if (process.env.NODE_ENV === 'development') {
      const username = process.env.REACT_APP_USER;
      const password = process.env.REACT_APP_PASSWORD;
      axios.defaults.auth = {
        username,
        password
      };
      axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
    } else {
      axios.defaults.headers['X-userToken'] = window.servicenowUserToken;
    }
    axios.defaults.headers.put['Content-Type'] = 'application/json';
    //axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
  }
}

export default new ServiceNow();
export { paths as serviceNowApi };