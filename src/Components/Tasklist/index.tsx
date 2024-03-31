import React, { Fragment } from "react";
import Task from "../Task";
interface ITaskList{
    taskList :Array<string>,
    handleChangeTaskList : (taskList : string[])=>void
}
const TaskList =(props:ITaskList)=>{
  const {taskList=[],handleChangeTaskList} = props;
   const handleSubmit=(val:string,action:string,index:number)=>{
   if(action == 'edit'){
     let newTaskList = [...taskList];
     newTaskList[index] = val;
     handleChangeTaskList(newTaskList)
   }
   else if(action == 'delete'){
     let newTaskList = (index == 0) ?  [...taskList.slice(1,taskList.length)] : index == taskList.length -1 ? [...taskList.slice(0,taskList.length-1)]:[...taskList.slice(0,index),...taskList.slice(index,taskList.length-1)]
     handleChangeTaskList(newTaskList)
   }
   return;
   }
    return <Fragment>
        {taskList.length > 0 && <div>
            {taskList.map((task:string,index:number)=><Task key={index} index={index} task={task} handleSubmit={handleSubmit}/>)}
            </div>}
    </Fragment>
}


export default TaskList;