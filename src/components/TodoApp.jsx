import { useState, useRef } from 'react';
import Input from './Input';
import List from './List';
import DateyyyyMMdd from '../functions/originalFunctions' 
import Modal from './Modal';


function TodoApp() {



  const [task, setTask ] = useState('');
  const [list, setList] = useState([
    {id: Math.random(), time: 1 , task:"aaaaaaaaaaaaaaaaaaa"},
    {id: Math.random(),time: 2 , task:"bbbbbbbbbbbbbbbbbbb"},
    {id: Math.random(),time: 3 , task:"ccccccccccccccccccc"},
  ]);

  const [className, setClassName] = useState('CloseModal');
  const [overlay, setOverlay] = useState('');

  const [test, setTest] = useState('');

  const [selectId, setSelectId] = useState('初期表示');

  const refTask = useRef('');



    return (
      <div className="TodoApp">
        <header className="App-header">
          <p>Todo アプリです</p>
        </header>
        <div className='ListColumn' >
          <List list ={list}  setList = {setList} selecId = {selectId} setSelectId ={setSelectId} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask}/>
        </div>
       
        <div id='ListColumn' ></div>
        

       
        <div className='InputSection'>
        <Input test = {test} setTest ={setTest} list = {list} setList = {setList}  />
        </div>
        {/* <div className="overlay">
          <div className="modal">
          <p>これがモーダルウィンドウです。</p>
          <p><button>close</button></p>
          </div>
        </div> */}

        <div >

          <Modal selectId = {selectId} setSelectId ={setSelectId} list = {list} setList = {setList} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask}/>
        </div>
              

      </div>
     
    );
}

export default TodoApp;