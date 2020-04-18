import React from "react"
import styled from 'styled-components'

import Button from '../button';

const Posts=styled.div`
  display: flex;
  border: 1px solid black;

  .post-preview {
    flex: 0 0 40%;
    img {
      max-width: 100%;
    }
  }
`

const Post = () => {
  return (
    <Posts>
     <div className="post-preview">
        <img src="images/mac.jpg"/>
     </div>
    <div className="post-main">
      <div className="heading">
        <span>OCTOBER 2019REACT</span>
        <h1>Why I left Google?</h1>
      </div>
      <div className="content">
        <p>Nếu bạn có kinh nghiệm làm việc với các stylesheets của các ứng dụng web lớn</p>
      </div>
      <Button>Read</Button>
    </div>
    </Posts>)
}

export default Post
