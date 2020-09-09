import axios from 'axios';

const instance = axios.create({
  baseURL : "https://burger-builder-b2117.firebaseio.com/"
});

export default instance;