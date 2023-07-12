import React, {createContext, useContext} from 'react'

const useTodoContext = () => {
    const task = createContext("todo");
    const taskList = createContext(["a","b","c"]);
    const now = createContext(1234);

    const data = {
        task :task,
        taskList:taskList, 
        now:now
    }


    return task;

}

export default useTodoContext;