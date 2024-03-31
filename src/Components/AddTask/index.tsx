import React,{ useState } from "react";
import Button from "../UI/Button"
import InputComponent from "../UI/InputComponent"

interface IAddTaskProps {
    handleAddTask : (task:string) => void,
    btnText ?:string,
    val?:string
}
const AddTaskComponent=(props : IAddTaskProps)=>{
    const {handleAddTask,btnText="Add Task",val=''} = props;
    const [task,setTask] = useState(val)
    const handleChange=(e)=>{
        const value =e.target.value;
          setTask(value)
    }

    const handleClick=()=>{
        setTask('');
         if(!!task && !!task.trim())
         handleAddTask(task);
    }
    return <div>
        <InputComponent type={"text"} handleChange={handleChange} inputProps={{value:task}} />
        <Button text={btnText} handleClick={handleClick}/>
            </div>
}

export default React.memo(AddTaskComponent);