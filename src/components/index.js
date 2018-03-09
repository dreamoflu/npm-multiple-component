
import "./common.css"
import detailPage from './detailPage/index';
import resourListPage from './resourListPage/index';
import searchPage from './searchPage/index';
import videoPage from './videoPage/index';
import axios from 'axios'
let instance = axios.create();
let $postHttp = function (url, param) {
  instance.defaults.headers.common['token'] = localStorage.getItem("token");
// Add a request interceptor
  instance.interceptors.request.use(function (config) {

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Do something with response data

    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  return instance.post(url, param);
};

const components = [
  detailPage,resourListPage,searchPage,videoPage
];
const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$postHttp = $postHttp;
 
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// module.exports = {

//   install,detailPage,resourListPage,searchPage,videoPage

// };

// module.exports.default = module.exports;
export {
  install,detailPage,resourListPage,searchPage,videoPage
}
