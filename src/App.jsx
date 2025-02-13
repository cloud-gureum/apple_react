/*eslint-disable*/

import { useState } from 'react'
import './App.css'

function App() {

  let logo = 'ReactBlog';
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [thumbs, changeThumbs] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState();
  let [inputVal, setInputVal] = useState('');

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

      {
        title.map(function (a, i) {
          return <div className="list" key={i}>
            <h4 onClick={() => { setModal(!modal); setModalIndex(i) }}>{title[i]}
              <span onClick={(e) => { e.stopPropagation(); let thumbsCopy = [...thumbs]; thumbsCopy[i] = thumbsCopy[i] + 1; changeThumbs(thumbsCopy); }}>👍</span>
              {thumbs[i]}
              <button onClick={(e)=>{e.stopPropagation();
              changeTitle(title.filter((value, index)=>index !== i));
              }}>삭제</button>
            </h4>

            <p>2월 11일 발행</p>
          </div>
        })
      }

      <input type="text" onChange={(e) => {
        setInputVal(e.target.value);
      }} />
      <button onClick={() => { let newTitle = title.concat(inputVal); changeTitle(newTitle); setInputVal(''); }}>등록</button>

      {
        modal == true ? <Modal modalIndex={modalIndex} title={title} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalIndex]}</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
}

export default App
