import DateyyyyMMdd from '../functions/originalFunctions' 
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import { useState } from 'react';
import useTodoContext from '../hooks/useTodoContext';


const  List =  (props) => {

    const setSelectId = (id ,task, state) => {
        console.log(id);
        props.setSelectId(id);
        props.setClassName('ShowModal');
        props.setOverlay('overlay');
        props.setTaskState(state)
        console.log(state)
    }

    


    const deleteTask = (id) => {
        console.log(id)
        const newlist = props.list.filter((task) => task.id !== id);
        
     
        console.log(props.list)
        console.log(newlist)

        props.setList([
         ...newlist
        ]);
        

    }



    return(
        
        <div className='MemoGrid'>
        {
            
            props.list.map((a) => (
                <div className={`MemoTile ${a.state}`} key={Math.random()}>
                    <div className='taskTop'>
                        <div className='Time'>{a.time}</div>
                        <div onClick={() => deleteTask(a.id)}>×</div>
                    </div>
                    
                    
                    
                    <div className='TaskMemo'>{a.task}</div>
                    
                    <p> </p>
                    <div className='TaskDetail' onClick={() => (setSelectId(a.id, a.task, a.state))}>～詳細～</div>
            
                </div>
            ))
        }






    </div>
    );
} 

export default List;