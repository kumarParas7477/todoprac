import React, { Fragment, useState } from "react";
import AddTaskComponent from "../AddTask";

interface ITaskProps{
    task :string,
    handleSubmit : (value:string,action:string,index:number)=>void,
    index : number
}
const Task=(props :ITaskProps)=>{
    const {task,handleSubmit,index} = props;
    const [edit,setEdit] = useState(false);

   const editTask=()=>{
    setEdit((prevVal)=> !prevVal)
   }
   const handleEditTask=(val)=>{
    editTask();
handleSubmit(val,'edit',index)
   }
    const handleDelete=()=>{
handleSubmit('','delete',index)
   }
    return <Fragment>
        {edit ?
        <AddTaskComponent handleAddTask={handleEditTask} btnText="Submit" val={task}/>:
        <div style={{display :'flex'}}>
        <div style={{width:'60%',textAlign :'start'}}>{task}</div>
        <div style={{display:'flex'}}>
        <button onClick={editTask}>Edit</button>
        <button onClick={handleDelete}>delete</button>
        </div>
    </div>}
    </Fragment>

}

export default Task;