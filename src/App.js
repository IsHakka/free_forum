import './App.scss';
import avatar from './images/bozai.png';
import { useState } from 'react';

// 評論區數據
const list = [
  {
    "rpid": 3,
    "user": {
      "uid": "13258165",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "周杰倫"
    },
    "content": "哎哟，不錯哦",
    "ctime": "10-18 08: 15",
    "like": 126
  },
  {
    "rpid": 2,
    "user": {
      "uid": "36080105",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "許高"
    },
    "content": "我尋你千百度 日出到遲暮",
    "ctime": "11-13 11: 29",
    "like": 88
  },
  {
    "rpid": 1,
    "user": {
      "uid": "30009257",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "黑马前端"
    },
    "content": "學前端就来黑马",
    "ctime": "10-19 09: 00",
    "like": 66
  }
]
// 當前用戶信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户頭像
  avatar,
  // 用户稱號
  uname: '黑马前端',
}
// 導航 Tab 陣列
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

function App() {
  const [commentList, setcommentList] = useState(list);

  // 刪除
  const handleDel = (id)=>{
      setcommentList(commentList.filter(item => item.rpid !== id));
  }
  // 標籤切換

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {
              tabs.map(item => <span key={item.type} className='nav-item'>{item.text}</span>)
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 發表評論 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户頭像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 評論框 */}

            {/* 發布按鈕 */}
            <div className="reply-box-send">
              <div className="send-text">發布</div>
            </div>
          </div>
        </div>
        {/* 評論列表 */}
        <div className="reply-list">
          {
            commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                      className="bili-avatar-img"
                      alt=""
                      src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 評論内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 評論時間 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 評論数量 */}
                      <span className="reply-time">點讚數:{item.like}</span>
                      {/* 條件：user.id === item.user.id */}
                      {
                        user.uid === item.user.uid && <span className="delete-btn" onClick={()=>handleDel(item.rpid)}>
                        刪除
                      </span>
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
