import React from "react"
import Header from "./Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
