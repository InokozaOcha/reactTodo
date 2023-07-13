import React, { useContext } from "react";
import TaskState from "../functions/TaskState"; 
import { TodoContext } from "./TodoApp";

const Modal = () => {
    const {setTest ,list,overlay,className,taskState,selectId,setTaskState,setList,setClassName,setOverlay} = useContext(TodoContext);

    //詳細画面
    const Detail = (id) => {
       
        let data = list.filter((task) => task.id === id);

        if(data.length < 1) {
           
            //idと一致しないときは、ざんねんでしたｗと表示
            data = [
                {id: "ないよ", time: 1 , task:"ざんねんでしたｗ"},
            ]
           
       
        } else {
           
        }


        

        return(
            <div className= {overlay}>
                <div className={`${className} ${taskState}`}>
                    <textarea className="ModalText"
                        value={data[0].task}
                        onChange={(e => (
                            //変更があったらTaskChangで変更
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

    //タスクの変更機能（状態変更関数：TaskStateみたいに外部に出すと動かない？）
    const TaskChange = (task , id) => {
        let newList = list.map(a =>{ 
            if(a.id === id) {
                return {id: a.id , time: a.time , task: task, state: a.state}
            } else {
                return a
            }
        })

        setList(newList)
    }

    //CSSを変更して、モーダルを消す
    const CloseModal = () => {
        setClassName("CloseModal");
        setOverlay('');
    }

    return(
        <div className={className}>
            {Detail(selectId)}
        </div>
    )
}



export default Modal;