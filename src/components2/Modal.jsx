import React, { useState, useContext } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 
import List from "./List";
import TaskState from "../functions/TaskState"; 
import { TodoContext } from "./TodoApp";

const Modal = (props) => {
    const {test, setTest ,list,overlay,className,taskState,selectId,setTaskState,setList,setClassName,setOverlay} = useContext(TodoContext);

    const Detail = (id) => {

        console.log(id)
            let data = list.filter((task) => task.id === id);

      
        

        if(data.length < 1) {
           
            data = [
                {id: "ないよ", time: 1 , task:"ざんねんでしたｗ"},
              ]
           
       
        } else {
           
        }


        

        return(
            <div className= {overlay}>
                <div className={`${className} ${taskState}`}>
                    <textarea className="ModalText"
                    //value={""}
                    value={data[0].task}
                    onChange={(e => (
                        // console.log(e.target.value)
                        TaskChange(e.target.value,selectId)
                        ))}
                    // onChange={(e => (setNewTask(e.target.value)))}
                ></textarea>
                <div className={`StateBox`}>
                    <div 
                        className="NotReady StateContents"
                        onClick={() => {TaskState(selectId,"NotReady",list,setList)
                            setTaskState("NotReady")
                        }}
                    >やらない</div>    
                    <div 
                        className="Ready StateContents"
                        onClick={() => {TaskState(selectId,"Ready",list,setList)
                            setTaskState("Ready")}}
                    >やる予定</div>
                    <div 
                        className="Doing StateContents"
                        onClick={() => {TaskState(selectId,"Doing",list,setList)
                            setTaskState("Doing")}}
                    >着手中</div>
                    <div 
                        className="Done StateContents"
                        onClick={() => {TaskState(selectId,"Done",list,setList)
                        setTaskState("Done")}}
                    >完了</div>

                </div>
            
                    
                    <div className="CloseModalButton" onClick={() => (CloseModal())}>閉じる</div>
                </div>
            </div>
            
        )
    
    }  

    const TaskChange = (task , id) => {
       // console.log(task)
        console.log(id)
        let newList = list.map(a =>{ 
            if(a.id === id) {
                return {id: a.id , time: a.time , task: task, state: a.state}
            } else {
                return a
            }
        })

        setList(newList)

       //const newList = props.list.map( id === id ? {id: id , time: time , task: task} :task)

        // props.setList((list) =>
        //     list.map((task) => (task.id === id ? { id: id, name: task } : task))
        // );
        console.log(newList)
    }

    const CloseModal = () => {
        setClassName("CloseModal");
        setOverlay('');
        console.log(className)
        setTest("変更したよー")
    }

    return(
        <div className={className}>
            
            {Detail(selectId)}
           
        </div>
    )
}



export default Modal;