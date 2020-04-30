import React from "react"

import "./button.scss"

const index = props => {
  return (
    <button>
      <span> {props.children}</span>
    </button>
  )
}

export default index
