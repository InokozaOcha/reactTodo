import React, {createContext, useContext, useState} from 'react'


export const useTodoContext = () => {



    const [list, setList] = useState([]);
  
    const [className, setClassName] = useState('CloseModal');
    const [overlay, setOverlay] = useState('');
  
    const [test, setTest] = useState('aaaaaaaaaaaa');
  
    const [selectId, setSelectId] = useState('初期表示');
  
    const [taskState,setTaskState] = useState('');

   


    const todoValue = {
        className, setClassName,
        overlay, setOverlay,
        test, setTest,
        selectId, setSelectId,
        taskState,setTaskState,
        list,setList
    }

    const obj = useContext(todoValue)




    return todoValue;

}



export default useTodoContext;