import videoPage from './videoPage';

/* istanbul ignore next */
videoPage.install = function(Vue) {
  Vue.component(videoPage.name, videoPage);
};

export default videoPage;
