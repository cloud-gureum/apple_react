import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let post = '홍대 카페';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'grey', fontSize :'16px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App
