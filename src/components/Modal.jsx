import React, { useState } from "react";
import DateyyyyMMdd from '../functions/originalFunctions' 
import List from "./List";

const Modal = (props) => {

    
   
    const Detail = (id) => {
    

        let data = props.list.filter((task) => task.id === id);

      
        

        if(data.length < 1) {
            console.log("ffffffffffffffffffffffffff")
            data = [
                {id: "ないよ", time: 1 , task:"ざんねんでしたｗ"},
              ]
              //setClassName("CloseModal")
       
        } else {
           
        }


        

        return(
            <div className= {props.overlay}>
                <div className={props.className}>
                    <textarea className="ModalText"
                    //value={""}
                    value={data[0].task}
                    onChange={(e => (
                        // console.log(e.target.value)
                        TaskChange(e.target.value,props.selectId)
                        ))}
                    // onChange={(e => (setNewTask(e.target.value)))}
                ></textarea>
            
                    
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
                return {id: a.id , time: a.time , task: task}
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