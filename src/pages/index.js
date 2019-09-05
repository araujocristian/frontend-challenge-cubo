import React from "react"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import HeaderCubo from "../components/HeaderCubo"
import CardCubo from "../objects/CardCubo"
import TitleCubo from "../objects/TitleCubo"

export default () => (
  <>
    <HeaderCubo />
    <CardCubo>
      <TitleCubo content="Lorem ipsum dolor" />
    </CardCubo>
  </>
)
