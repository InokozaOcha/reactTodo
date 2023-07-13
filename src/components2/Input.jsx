import React, { useState, useContext } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 
import { TodoContext } from "./TodoApp";
import { useAa } from '../hooks/useTodoContext2';

const Input = (props) => {

    const {list, setList,test} = useContext(TodoContext);
    const {test2, setTaskState} = useAa;
    console.log(test)
    console.log(test2)


    const change = () => {
        props.setTest("くりっく！");
        
        let newTaskNL = newTask.split('\n');
        let newText = newTaskNL.join('<br>');

        // props.setList([
        //     ...props.list, 
        //     {id: Math.random(),time: DateyyyyMMdd(Date()) , task:newTask, state:"Ready"}
        // ]);

       // console.log(props.aaa.test1)
        setList([
            ...list, 
            {id: Math.random(),time: DateyyyyMMdd(Date()) , task:newTask, state:"Ready"}
        ]);

        console.log(list)


      //  console.log(props.aaa)

        const goBottom = document.getElementById("ListColumn");
       // console.log(goBottom)
        goBottom.scrollIntoView({block: "end", inline: "nearest"})
    };

    const [newTask, setNewTask] = useState("");



 
    return (
        

        
        <div className="inputBox App-body">
            <div className="left"></div>
            <textarea className="TextArea"

               
                value={newTask}
                onChange={(e => (setNewTask(e.target.value)))}
                placeholder="タスクを入力してください"
            />

            <button className="PostButton" onClick={change}>Listにあたいをわたします</button>
            <div className="right"></div>
       


       {/*<button onClick={props.setTest('うけとったどぇ＾')}>Listにあたいをわたします</button> */}  
      
        
        </div>

        
    )
};

export default Input;