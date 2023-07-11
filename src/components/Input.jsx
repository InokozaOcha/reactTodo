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
        ]);

        const goBottom = document.getElementById("ListColumn");
        console.log(goBottom)
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