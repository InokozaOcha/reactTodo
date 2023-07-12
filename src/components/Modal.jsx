import React, { useState } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 
import List from "./List";
import TaskState from "../functions/TaskState"; 

const Modal = (props) => {

    
   
    const Detail = (id) => {
    

        let data = props.list.filter((task) => task.id === id);

      
        

        if(data.length < 1) {
           
            data = [
                {id: "ないよ", time: 1 , task:"ざんねんでしたｗ"},
              ]
           
       
        } else {
           
        }


        

        return(
            <div className= {props.overlay}>
                <div className={`${props.className} ${props.state}`}>
                    <textarea className="ModalText"
                    //value={""}
                    value={data[0].task}
                    onChange={(e => (
                        // console.log(e.target.value)
                        TaskChange(e.target.value,props.selectId)
                        ))}
                    // onChange={(e => (setNewTask(e.target.value)))}
                ></textarea>
                <div className={`StateBox`}>
                    <div 
                        className="NotReady StateContents"
                        onClick={() => {TaskState(props.selectId,"NotReady",props.list,props.setList)
                            props.setTaskState("NotReady")
                        }}
                    >やらない</div>    
                    <div 
                        className="Ready StateContents"
                        onClick={() => {TaskState(props.selectId,"Ready",props.list,props.setList)
                        props.setTaskState("Ready")}}
                    >やる予定</div>
                    <div 
                        className="Doing StateContents"
                        onClick={() => {TaskState(props.selectId,"Doing",props.list,props.setList)
                        props.setTaskState("Doing")}}
                    >着手中</div>
                    <div 
                        className="Done StateContents"
                        onClick={() => {TaskState(props.selectId,"Done",props.list,props.setList)
                        props.setTaskState("Done")}}
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
        let newList = props.list.map(a =>{ 
            if(a.id === id) {
                return {id: a.id , time: a.time , task: task, state: a.state}
            } else {
                return a
            }
        })

        props.setList(newList)

       //const newList = props.list.map( id === id ? {id: id , time: time , task: task} :task)

        // props.setList((list) =>
        //     list.map((task) => (task.id === id ? { id: id, name: task } : task))
        // );
        console.log(newList)
    }

    const CloseModal = () => {
        props.setClassName("CloseModal");
        props.setOverlay('');
        console.log(props.className)
    }

    return(
        <div className={props.className}>
            
            {Detail(props.selectId)}
           
        </div>
    )
}



export default Modal;