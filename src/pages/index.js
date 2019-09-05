import React from "react"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import HeaderCubo from "../components/HeaderCubo"
import CardCubo from "../objects/CardCubo"
import TitleCubo from "../objects/TitleCubo"
import DescriptionCubo from "../objects/DescriptionCubo"
import BulletCubo from "../objects/BulletCubo"

export default () => (
  <>
    <HeaderCubo />
    <CardCubo>
      <TitleCubo content="Lorem ipsum dolor" />
      <DescriptionCubo content="Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene" />
    </CardCubo>

    <BulletCubo content="Primeiro" href="#first" isActive />
    <BulletCubo content="Primeiro" href="#first" />
    <BulletCubo content="Primeiro" href="#first" />
  </>
)
