import React, {createContext, useContext, useState} from 'react'

const TodoContext2 = createContext();


const useTodoContext2 = () => {



    const [list, setList] = useState([]);
  
    const [className, setClassName] = useState('CloseModal');
    const [overlay, setOverlay] = useState('');
  
    const [test2, setTest2] = useState('bbbbbbbbbbbbbbbbbbbb');
  
    const [selectId, setSelectId] = useState('初期表示');
  
    const [taskState,setTaskState] = useState('');

   


    const todoValue = {
        className, setClassName,
        overlay, setOverlay,
        test2, setTest2,
        selectId, setSelectId,
        taskState,setTaskState,
        list,setList
    }

    const obj = useContext(todoValue)


    

    return todoValue;

}

const useAa = () => {
    const aaa = TodoContext2
    return useContext(aaa)
}

export {useTodoContext2 ,TodoContext2,useAa};