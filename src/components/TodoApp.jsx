import { useState, useRef, useContext } from 'react';
import Input from './Input';
import List from './List';
import DateyyyyMMdd from '../functions/originalFunctions' 
import Modal from './Modal';



function TodoApp() {

  // const data = useContext;
  // console.log(data.data)

  const [task, setTask ] = useState('');
  const [list, setList] = useState([

  ]);

  const [className, setClassName] = useState('CloseModal');
  const [overlay, setOverlay] = useState('');

  const [test, setTest] = useState('');

  const [selectId, setSelectId] = useState('初期表示');

  const refTask = useRef('');

  const [taskState,setTaskState] = useState('');


    return (
      <div className="TodoApp">
        <header className="App-header">
          <p>Todo アプリです</p>
        </header>
        <div className='ListColumn' >
          <List list ={list}  setList = {setList} selecId = {selectId} setSelectId ={setSelectId} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask} setTaskState = {setTaskState}/>
        </div>
       
        <div id='ListColumn' ></div>
        

       
        <div className='InputSection'>
        <Input test = {test} setTest ={setTest} list = {list} setList = {setList}  />
        </div>

        <div >

          <Modal selectId = {selectId} setSelectId ={setSelectId} list = {list} setList = {setList} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask} state={taskState} setTaskState={setTaskState}/>
        </div>
              

      </div>
     
    );
}

export default TodoApp;