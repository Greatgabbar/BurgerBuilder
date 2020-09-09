import axios from 'axios';

const instance = axios.creat({
  baseURL : "https://burger-builder-b2117.firebaseio.com/"
});

export default instance;