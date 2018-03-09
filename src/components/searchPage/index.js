import searchPage from './searchPage';

/* istanbul ignore next */
searchPage.install = function(Vue) {
  Vue.component(searchPage.name, searchPage);
};

export default searchPage;
