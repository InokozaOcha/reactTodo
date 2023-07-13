import React, { useState,useContext } from "react";
import { TodoContext } from "../components/TodoApp";

const TaskState = (postId , postState, postList, postSetList ) => {
    //const {taskState,list,setList} = useContext(TodoContext);
    //なぜフックが使えない？
    //console.log(list)

    let newList = postList.map(a =>{ 
        if(a.id === postId) {
            //console.log("更新" + a)
            return {id: a.id , time: a.time , task: a.task, state: postState}
        } else {
           // console.log("こうしんされてない！")
            return a
        }
    })
    console.log(newList)

    postSetList(newList)

    return
}

export default TaskState;