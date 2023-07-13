import { useState, useRef, useContext,createContext } from 'react';
import Input from './Input';
import List from './List';
import DateyyyyMMdd from '../functions/originalFunctions' 
import Modal from './Modal';
import {useTodoContext} from '../hooks/useTodoContext';
import { TodoContext2, useTodoContext2 } from '../hooks/useTodoContext2';

export const  TodoContext = createContext();

const todoContextAAA = TodoContext2;

function TodoApp() {

  // const data = useContext;
  // console.log(data.data)
 

  const [list, setList] = useState([

  ]);

  const [className, setClassName] = useState('CloseModal');
  const [overlay, setOverlay] = useState('');

  const [test, setTest] = useState('');

  const [selectId, setSelectId] = useState('初期表示');

  const refTask = useRef('');

  const [taskState,setTaskState] = useState('');

  const aaa = useTodoContext();
  const bbb = useTodoContext2();




  console.log("Adesu")
   console.log(aaa)
  // aaa.setTest1("変更したよ")
  console.log("Bdesu")
   console.log(bbb)

    return (
      <todoContextAAA.Provider value ={bbb}>
      <TodoContext.Provider value={aaa}>
      <div className="TodoApp">
        <header className="App-header">
          <p>Todo アプリです</p>
          
        <div>てすとらん:{aaa.test}:{bbb.test2}
        
        
        </div>
        </header>
        <div className='ListColumn' >
          <List list ={list}  setList = {setList} selecId = {selectId} setSelectId ={setSelectId} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask} setTaskState = {setTaskState}/>
        </div>
       
        <div id='ListColumn' ></div>
        

       
        <div className='InputSection'>
        <Input test = {test} setTest ={setTest} list = {list} setList = {setList} aaa = {aaa}  />
        </div>


        <div >

          <Modal selectId = {selectId} setSelectId ={setSelectId} list = {list} setList = {setList} className = {className} setClassName ={setClassName} overlay = {overlay} setOverlay ={setOverlay} refTask={refTask} state={taskState} setTaskState={setTaskState}/>
        </div>
              

      </div>
      </TodoContext.Provider>
      </todoContextAAA.Provider>
     
    );
}

export default TodoApp;