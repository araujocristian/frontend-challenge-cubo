import React from "react"

import "./styles.css"
import LogoCubo from "../../objects/LogoCubo"
import MenuCubo from "../MenuCubo";

const HeaderCubo = () => {
  return (
    <header className="header-cubo container">
      <LogoCubo />
      <MenuCubo />
    </header>
  )
}

export default HeaderCubo
