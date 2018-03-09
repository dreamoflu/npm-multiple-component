<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){

    }
  }
</script>

<style>
  /*@font-face {*/
    /*font-family: winntiChinaFont;*/
    /*src: url('./assets/font/winntiChinaFont.ttf')*/
  /*}*/
  /*@font-face {*/
    /*font-family: winntiEnglishFont;*/
    /*src: url('./assets/font/winntiEnglishFont.ttf')*/

  /*}*/
  @font-face {
    font-family: 'iconfont';  /* project id 575328 */
    src: url('//at.alicdn.com/t/font_575328_rndsaqjx1aif6r.eot');
    src: url('//at.alicdn.com/t/font_575328_rndsaqjx1aif6r.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_575328_rndsaqjx1aif6r.woff') format('woff'),
    url('//at.alicdn.com/t/font_575328_rndsaqjx1aif6r.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_575328_rndsaqjx1aif6r.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;



  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /*font-size: 100%;*/
    vertical-align: baseline;
    background: transparent;
    font-size: 14px;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* remember to define focus styles! */
  :focus {
    outline: 0;
  }

  /* remember to highlight inserts somehow! */
  ins {
    text-decoration: none;
  }
  del {
    text-decoration: line-through;
  }

  /* tables still need 'cellspacing="0"' in the markup */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .input.is-danger{
    border:1px solid red;
    border-color:red;
  }
  .help.is-danger{
    color: red;
  }


</style>
