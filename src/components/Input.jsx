import React, { useState } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 

const Input = (props) => {

    const change = () => {
        props.setTest("くりっく！");
        
        let newTaskNL = newTask.split('\n');
        let newText = newTaskNL.join('<br>');

        props.setList([
            ...props.list, 
            {id: Math.random(),time: DateyyyyMMdd(Date()) , task:newTask}
          // {id: Math.random(),time: DateyyyyMMdd(Date()) , task:newText}
        ]);
    };

    const [newTask, setNewTask] = useState("");



 
    return (
        
        <div className="inputBox App-body">
            <textarea className="TextArea"

               
                value={newTask}
                onChange={(e => (setNewTask(e.target.value)))}
                placeholder="タスクをにゅうりょくしてください入力"
            />

            <button className="PostButton" onClick={change}>Listにあたいをわたします</button>
       


       {/*<button onClick={props.setTest('うけとったどぇ＾')}>Listにあたいをわたします</button> */}  
      
        
        </div>

        
    )
};

export default Input;