import React from 'react'

import './recommend.scss'

const Recommend = () => {
  return (
    <div className="recommend">
      <h5>Bài đăng phổ biến</h5>
      <div className="small-post">
        <div className="main-post">
          <div className="preview">
            <img src="https://i.ibb.co/WGnktLs/m.png" alt=""/>
          </div>
        </div>
        <div className="content">
          <h6>Những ngày đầu đi làm</h6>
          <p>Hôm trước, mình đã có viết bài như thế này rồi...</p>
        </div>
      </div>
      <hr/>
      <div className="small-post">
        <div className="main-post">
          <div className="preview">
            <img src="https://i.ibb.co/WGnktLs/m.png" alt=""/>
          </div>
        </div>
        <div className="content">
          <h6>Những ngày đầu đi làm</h6>
          <p>Hôm trước, mình đã có viết bài rồi...</p>
        </div>
      </div>
      <hr/>
      <div className="small-post">
        <div className="main-post">
          <div className="preview">
            <img src="https://i.ibb.co/WGnktLs/m.png" alt=""/>
          </div>
        </div>
        <div className="content">
          <h6>Những ngày đầu đi làm</h6>
          <p>Hôm trước, mình đã có viết bài rồi...</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Recommend
