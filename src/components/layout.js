import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"

const Layout = ({children}) => (
  <div>
    <GlobalStyle />
    <Navbar />
    { children }
    <Footer />
  </div>
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    color:#262626;
    background:#fff;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
