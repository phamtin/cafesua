import React from "react"
import Recommend from "./recommend/Recommend"
import Category from "./category/Category"

const Aside = () => {
  return (
    <div className="aside" style={{ marginLeft: "5px" }}>
      <Recommend />
      <Category />
    </div>
  )
}

export default Aside
