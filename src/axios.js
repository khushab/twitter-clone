import axios from "axios";

axios.defaults.baseURL = 'https://khushabs-twitter-clone.herokuapp.com'
axios.defaults.headers.common['token'] = localStorage.getItem('token')