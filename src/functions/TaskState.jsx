import React, { useState } from "react";

const TaskState = (id , state, list, setList ) => {

    console.log(state)
    console.log(id)
    let newList = list.map(a =>{ 
        if(a.id === id) {
            console.log("更新" + a)
            return {id: a.id , time: a.time , task: a.task, state: state}
        } else {
            console.log("こうしんされてない！")
            return a
        }
    })
    console.log(newList)

    setList(newList)
}

export default TaskState;