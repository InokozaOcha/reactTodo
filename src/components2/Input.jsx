import React, { useState, useContext } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 
import { TodoContext } from "./TodoApp";
import { useAa } from '../hooks/useTodoContext2';

//追加ボタンを押した際に実行
const Input = (props) => {

    // 同じことやってるはずなんだけど、useAaがうまくいかない…
    // useAaができるなら、useContextも不要になるはず
    const {list, setList,test} = useContext(TodoContext);
    const {test2, setTaskState} = useAa;
    console.log(test) //aaaaaa
    console.log(test2) //undefined


    const [newTask, setNewTask] = useState("");


    const change = () => {
     
        
        let newTaskNL = newTask.split('\n');
        let newText = newTaskNL.join('<br>');

        setList([
            ...list, 
            {id: Math.random(),time: DateyyyyMMdd(Date()) , task:newTask, state:"Ready"}
        ]);

        //リストに追加したら、最下部まで移動
        setNewTask("")
        const goBottom = document.getElementById("ListColumn");
        goBottom.scrollIntoView({block: "end", inline: "nearest"})
    };

    



 
    return (
        

        
        <div className="inputBox App-body">
            <div className="left"></div>
            <textarea className="TextArea"

               
                value={newTask}
                onChange={ (e) => { 
                    setNewTask(e.target.value);
                }
                  
                    
                }
                placeholder="タスクを入力してください"
            />

            <button className="PostButton" onClick={change}>Listにあたいをわたします</button>
            <div className="right"></div>
       

      
        
        </div>

        
    )
};

export default Input;