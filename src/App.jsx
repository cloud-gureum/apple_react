/*eslint-disable*/

import { useState } from 'react'
import './App.css'

function App() {

  let logo = 'ReactBlog';
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [thumbs, changeThumbs] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={() => {
        let copy1 = [...title];
        copy1.sort();
        changeTitle(copy1);
      }
      }>가나다순정렬</button>
      <button onClick={() => {
        let copy2 = [...title];
        copy2[0] = '여자 코트 추천';
        changeTitle(copy2);
      }
      }>글수정</button>


      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { changeThumbs(thumbs + 1) }}>👍</span> {thumbs} </h4>
        <p>2월 11일 발행</p>
      </div>


      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 11일 발행</p>
      </div>

      <div className="list">
        <h4  onClick={() => {
          setModal(!modal)
          }}>{title[2]}</h4>
        <p>2월 11일 발행</p>
      </div> */}


      {
        title.map(function (a, i) {
          return <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal)}}>{title[i]}</h4>
            <span onClick={() => { let thumbsCopy = [...thumbs]; thumbsCopy[i] = thumbsCopy[i]+1; changeThumbs(thumbsCopy); }}>👍</span> 
              {thumbs[i]}
            <p>2월 11일 발행</p>
          </div>
        })
      }

      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
}

export default App
