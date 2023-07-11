import DateyyyyMMdd from '../functions/originalFunctions' 
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import { useState } from 'react';


const  List =  (props) => {

    const setSelectId = (id ,task) => {
        console.log(id);
        props.setSelectId(id);
        props.setClassName('ShowModal');
        props.setOverlay('overlay');
      //  props.refTask = task;
    }

    


    const deleteTask = (id) => {
        console.log(id)
        const newlist = props.list.filter((task) => task.id !== id);
        
        
        
       // const newlist =  [...props.list];
        //newlist.filter((task) => task.id !== id);
        //const newList = [...props.list];
        // newList.forEach(e => {
        //     if (e.id == id) 
        // });
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
                <div className='MemoTile' key={Math.random()}>
                    <div className='taskTop'>
                        <div className='Time'>{a.time}</div>
                        <div onClick={() => deleteTask(a.id)}>×</div>
                    </div>
                    
                    
                    
                    <div className='TaskMemo'>{a.task}</div>
                    
                    <p> </p>
                    <div className='TaskDetail' onClick={() => (setSelectId(a.id, a.task))}>～詳細～</div>
                    {/* <Modal id = {a.id} list = {props.list} setList = {props.setList}/> */}
                </div>
            ))
        }






    </div>
    );
} 

export default List;