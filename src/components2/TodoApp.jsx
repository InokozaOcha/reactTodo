import {createContext } from 'react';
import Input from './Input';
import List from './List';
import Modal from './Modal';
import {useTodoContext} from '../hooks/useTodoContext';
import { TodoContext2, useTodoContext2 } from '../hooks/useTodoContext2';

export const  TodoContext = createContext();

const todoContextAAA = TodoContext2;

function TodoApp() {
  const aaa = useTodoContext();
  const bbb = useTodoContext2();

    return (
      <todoContextAAA.Provider value ={bbb}>
      <TodoContext.Provider value={aaa}>
      <div className="TodoApp">
        <header className="App-header">
          <p>Todo アプリです</p>
        </header>
        <div className='ListColumn' >
          <List/>
        </div>
       
        <div id='ListColumn' ></div>
       
        <div className='InputSection'>
          <Input />
        </div>

        <div >
          <Modal/>
        </div>
              

      </div>
      </TodoContext.Provider>
      </todoContextAAA.Provider>
     
    );
}

export default TodoApp;