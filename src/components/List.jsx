// function DateyyyyMMdd(){
//     let date = new Date();
//     let yyyy = date.getFullYear();
//     let MM = date.getMonth();
//     let dd = date.getDay();
//     let H = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     let syyyy = String(date.getFullYear())
//     let sMM = String(date.getMonth());
//     let sdd = String(date.getDay());
//     let sH = String(date.getHours());
//     let smm = String(date.getMinutes());
//     let sss = String(date.getSeconds());


//     let postTime = yyyy + ' ' + MM + ' ' + dd + ' ' + H + ':' +mm + ':' +ss  ;
//     return postTime;
    
// }

import DateyyyyMMdd from '../functions/originalFunctions' 
import { v4 as uuidv4 } from 'uuid';
const  List =  (props) => {



    const deleteTask = (id) => {
        console.log(id)
        const newlist = props.list.filter((task) => task.id !== id);
        
        
        
       // const newlist =  [...props.list];
        //newlist.filter((task) => task.id !== id);
        //const newList = [...props.list];
        // newList.forEach(e => {
        //     if (e.id == id) 
        // });
        console.log(props.list)
        console.log(newlist)

        props.setList([
         ...newlist
        ]);
        

    }



    return(
        
        <div>
        {
            
            props.list.map((a) => (
                <div key={Math.random()}>
                    <div className='TaskMemo'> {a.time} : {
                    
                    
                    
                    a.task
                    }</div>
                    <div onClick={() => deleteTask(a.id)}>Delete ID: {a.id}</div>
                    
                </div>
            ))
        }






    </div>
    );
} 

export default List;