import React, { useState } from "react"
import AddTaskComponent from "../AddTask"
import TaskList from "../Tasklist"
const MainComponent=()=>{
 const [taskList,setTaskList] = useState([]);

    const handleTask=(task:string,index:number|null = null)=>{
        if(index == null){
                 setTaskList((prevVal)=> [...prevVal,task] )
        }
        else{
            let newArr = [...taskList];
            newArr[index] = task;
            setTaskList(newArr);
        }

    }
return <div>
    <AddTaskComponent handleAddTask={handleTask} />
    <TaskList taskList={taskList} handleChangeTaskList={setTaskList}/>
</div>
}

export default MainComponent