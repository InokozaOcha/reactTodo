import { useState } from 'react';
import Input from './Input';
import List from './List';
import DateyyyyMMdd from '../functions/originalFunctions' 


function TodoApp() {



  const [task, setTask ] = useState('');
  const [list, setList] = useState([
    {id: Math.random(), time: 1 , task:"aaaaaaaaaaaaaaaaaaa"},
    {id: Math.random(),time: 2 , task:"bbbbbbbbbbbbbbbbbbb"},
    {id: Math.random(),time: 3 , task:"ccccccccccccccccccc"},
  ]);

  const [test, setTest] = useState('初期表示です');



    return (
      <div className="TodoApp">
        <header className="App-header">
          <p>Todo アプリです</p>
        </header>
        <div className='ListColumn'>
          <List list ={list}  setList = {setList}/>
        </div>

       
        <div className='InputSection'>
        <Input test = {test} setTest ={setTest} list = {list} setList = {setList}/>
        </div>
      </div>
     
    );
}

export default TodoApp;