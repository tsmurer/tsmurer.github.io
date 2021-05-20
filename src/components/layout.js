/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

//import NavigationWrapper from "./navigationWrapper"
import Navbar from "./navbar"
import SectionGroup from "./section-group"

const Layout = ({ children }) => {
  return (
    <>
     
        <Navbar/>
        <SectionGroup/>
        <main>{children}</main>
        
    </>
  )
}

Layout.propTypes = {
}

export default Layout
