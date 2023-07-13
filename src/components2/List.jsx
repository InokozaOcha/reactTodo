import DateyyyyMMdd from '../functions/originalFunctions' 
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import { useContext, useState } from 'react';
import useTodoContext from '../hooks/useTodoContext';
import { TodoContext } from './TodoApp';
import { useAa } from '../hooks/useTodoContext2';


const  List =  (props) => {

    const {list2} = useAa();
    const {list,setList,setSelectId,setClassName,setOverlay,setTaskState} = useContext(TodoContext);
    //const {list} = TodoContext;
    const setSelectIdFunc = (id ,task, state) => {
        console.log(id);
        props.setSelectId(id);
        props.setClassName('ShowModal');
        props.setOverlay('overlay');
        props.setTaskState(state)
        console.log(state)

        //書き換え　
        setSelectId(id);
        setClassName('ShowModal');
        setOverlay('overlay');
        setTaskState(state)

    }

    // console.log("なにがでるかな？")
    // console.log(useAa) //useContext(TodoContext)　と同じものが返ってくるはずなんだけど？
    // console.log(useContext(TodoContext))

    


    const deleteTask = (id) => {
        console.log(id)
        const newlist = props.list.filter((task) => task.id !== id);
        const newlist2 = list.filter((task) => task.id !== id);
        
     
        console.log(props.list)
        console.log(newlist)

        props.setList([
         ...newlist
        ]);

        setList([
            ...newlist2
        ])
        

    }



    return(
        
        <div className='MemoGrid'>
        {
            
            // props.list.map((a) => (
            list.map((a) => (

                <div className={`MemoTile ${a.state}`} key={Math.random()}>
                    <div className='taskTop'>
                        <div className='Time'>{a.time}</div>
                        <div onClick={() => deleteTask(a.id)}>×</div>
                    </div>
                    
                    
                    
                    <div className='TaskMemo'>{a.task}</div>
                    
                    <p> </p>
                    <div className='TaskDetail' onClick={() => (setSelectIdFunc(a.id, a.task, a.state))}>～詳細～</div>
            
                </div>
            ))
        }






    </div>
    );
} 

export default List;