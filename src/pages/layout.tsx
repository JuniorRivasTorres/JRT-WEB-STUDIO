import React from "react" 
import { GlobalStyle } from "../components/styles/GlobalStyle"
import "../components/layout.css"


function Layout ({ children }) {
  return (
    <>
      <GlobalStyle />
    <main>{children}</main>
    </>
  )
}

export default Layout

//ce layout est juste pour laisser une trace pour etre capable de build