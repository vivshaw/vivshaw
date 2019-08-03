import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

const BaseStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,600,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Spectral:400,500,600,700&display=swap");

  ${styledSanitize}
  
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
    vertical-align: baseline;
  }

  body {
    padding: 0;
    background-color: ${props => props.theme.colors.bg};
  }
`;

export default BaseStyles;
