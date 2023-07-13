import { useContext, useState } from 'react';
import useTodoContext from '../hooks/useTodoContext';
import { TodoContext } from './TodoApp';
import { useAa } from '../hooks/useTodoContext2';


const  List =  (props) => {

    const {list2} = useAa();
    const {list,setList,setSelectId,setClassName,setOverlay,setTaskState} = useContext(TodoContext);
    //const {list} = TodoContext;

    // CCSを書き換えて、モーダルを表示
    //クリックと同時に画面を生成する方がかっこいいかも
    const setSelectIdFunc = (id ,task, state) => {
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
        const newlist = list.filter((task) => task.id !== id);
        setList([
            ...newlist
        ])
    }



    return(
        
        <div className='MemoGrid'>
        {
            
           
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