import { createGlobalStyle, css } from 'styled-components';

const FontFaceEN = css`
  /* light */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-Light.ttf'
        ) format('truetype');
      font-weight: lighter;
      font-style: normal;
  }
  /* ligth-italic */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-LightItalic.ttf'
        ) format('truetype');
      font-weight: lighter;
      font-style: italic;
  }
  /* regular */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-Regular.ttf'
        ) format('truetype');
      font-weight: normal;
      font-style: normal;
  }
  /* semi-bold */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-SemiBold.ttf'
        ) format('truetype');
      font-weight: 600;
      font-style: normal;
  }
  /* semi-bold-italic*/
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-SemiBold.ttf'
        ) format('truetype');
      font-weight: 600;
      font-style: italic;
  }
  /* bold */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-Bold.ttf'
        ) format('truetype');
      font-weight: bold;
      font-style: normal;
  }
  /* bold-italic */
  @font-face {
      font-family: "Source Sans3";
      src: url(
        'font/sourceSans3/SourceSans3-BoldItalic.ttf'
        ) format('truetype');
      font-weight: bold;
      font-style: italic;
  }
`;
const FontFaceKR = css`
  /* thin */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Thin.otf'
        ) format('opentype');
      font-weight: 100;
      font-style: normal;
  }
  /* light */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Light.otf'
        ) format('opentype');
      font-weight: lighter;
      font-style: normal;
  }
  /* regular */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Regular.otf'
        ) format('opentype');
      font-weight: normal;
      font-style: normal;
  }
  /* medium */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Medium.otf'
        ) format('opentype');
      font-weight: 500;
      font-style: normal;
  }
  /* bold */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Bold.otf'
        ) format('opentype');
      font-weight: bold;
      font-style: normal;
  }
  /* black */
  @font-face {
      font-family: "Noto Sans KR";
      src: url(
        'font/notoSansKR/NotoSansKR-Black.otf'
        ) format('opentype');
      font-weight: 900;
      font-style: normal;
  }
`;

const ResetCss = css`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
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
  }
  /* Font Style EN */
  ${FontFaceEN}
  /* Font Style KR */
  ${FontFaceKR}
  /* Reset CSS */
  ${ResetCss}

  body {
    font-family: Source Sans3, Noto Sans KR;
  }
`;

export default GlobalStyle;