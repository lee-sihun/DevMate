import { createGlobalStyle, css } from 'styled-components';
// import SourceSans3Light from './assets/font/sourceSans3/SourceSans3-Light.ttf';
// import SourceSans3Regular from './assets/font/sourceSans3/SourceSans3-Light.ttf';
// import SourceSans3SemiBold from './assets/font/sourceSans3/SourceSans3-Light.ttf';
// import SourceSans3Bold from './assets/font/sourceSans3/SourceSans3-Light.ttf';

// import NotoSansKR_thin from './assets/font/notoSansKR/NotoSansKR-Thin.otf';
// import NotoSansKR_light from './assets/font/notoSansKR/NotoSansKR-Light.otf';
// import NotoSansKR_regular from './assets/font/notoSansKR/NotoSansKR-Regular.otf';
// import NotoSansKR_medium from './assets/font/notoSansKR/NotoSansKR-Medium.otf';
// import NotoSansKR_bold from './assets/font/notoSansKR/NotoSansKR-Bold.otf';
// import NotoSansKR_black from './assets/font/notoSansKR/NotoSansKR-Black.otf';

// const FontFaceEN = css`
//   /* light */
//   @font-face {
//     font-family: 'Source Sans3';
//     src: url(${SourceSans3Light}) format('truetype');
//     font-weight: lighter;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* regular */
//   @font-face {
//     font-family: 'Source Sans3';
//     src: url(${SourceSans3Regular}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* semi-bold */
//   @font-face {
//     font-family: 'Source Sans3';
//     src: url(${SourceSans3SemiBold}) format('truetype');
//     font-weight: 600;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* bold */
//   @font-face {
//     font-family: 'Source Sans3';
//     src: url(${SourceSans3Bold}) format('truetype');
//     font-weight: bold;
//     font-style: normal;
//     font-display: optional;
//   }
// `;
// const FontFaceKR = css`
//   /* thin */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_thin}) format('opentype');
//     font-weight: 100;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* light */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_light}) format('opentype');
//     font-weight: lighter;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* regular */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_regular}) format('opentype');
//     font-weight: normal;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* medium */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_medium}) format('opentype');
//     font-weight: 500;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* bold */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_bold}) format('opentype');
//     font-weight: bold;
//     font-style: normal;
//     font-display: optional;
//   }
//   /* black */
//   @font-face {
//     font-family: 'Noto Sans KR';
//     src: url(${NotoSansKR_black}) format('opentype');
//     font-weight: 900;
//     font-style: normal;
//     font-display: optional;
//   }
// `;

const ResetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  optionalquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: optional;
  }
  body {
    line-height: 1.4;
  }
  ol,
  ul {
    list-style: none;
  }
  optionalquote,
  q {
    quotes: none;
  }
  optionalquote:before,
  optionalquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  /* 여기에 글로벌 스타일 및 스타일 변수를 정의합니다 */
  :root {
    /* Brand Color */
    --blue-light1: #CCE2FF;
    --blue-light2: #CCD7FF;
    --blue-semi-light1: #99C5FF;
    --blue-semi-light2: #99AFFF;
    --blue-regular1: #338BFF;
    --blue-regular2: #3360FF;
    --blue-semi-dark1: #0058CC;
    --blue-semi-dark2: #002DCC;
    --blue-dark1: #002C66;
    --blue-dark2: #001666;

    /* Functional Color */
    --success: #338BFF;
    --warning: #FFBD59;
    --error: #FF6868;

    /* Netural Color */
    --title: #000;
    --text: #000;
    --second-text: #4D4D4D;
    --disabled-text: #B3B3B3;
    --default-border: #D9D9D9;
    --seperator: #EFEFEF;
    --layout-bg: #FAFAFA;

    /* Effect Color*/
    --box-shadow: rgba(0,0,0,.3);
    --box-shadow-light: rgba(0,0,0,.1);
  }
  /* Font Style EN */

  /* Font Style KR */
  
  /* Reset CSS */
  ${ResetCss}

  ::-webkit-scrollbar-track {
    background-color: var(--blue-light1);
    }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue-semi-light2);
    border-radius: 10px;
  }
  html{
    scroll-behavior: smooth;
  }
  html::-webkit-scrollbar {
    /* width:10px; */
  }
  html::-webkit-scrollbar-track {
    background-color: var(--blue-light1);
  }
  html::-webkit-scrollbar-thumb {
    background-color: var(--blue-regular1);
    border-radius: 10px;
  }
  .toastui-editor-main{
  background-color: white;
  } 
`;

// body, button {
//   font-family:
//   /* Arial, Helvetica, sans-serif, */
//   /* 'Source Sans3',  */
//   Noto Sans KR;
// }

// ${FontFaceEN}
// ${FontFaceKR}

export default GlobalStyle;
