/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {theme} from '../../utils/theme';
import IndexPage from '../../pages/index';
import Header from "../navBar";
import Footer from '../footer';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat";
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

`

const Layout = ({ location, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>

    <>
    <GlobalStyle/>
     <IndexPage />
        {/* <div>{children}</div> */}
      {location && location.pathname !== '/404'}

        <Footer />
     
    </>
    </ThemeProvider>

  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
