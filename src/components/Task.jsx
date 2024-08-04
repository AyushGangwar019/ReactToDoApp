import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import todoContext from "../Context/todoContext";
import { motion } from "framer-motion"

function Task({taskName, completed, id, parentRef}) {

  const {tasks, setTasks} = useContext(todoContext)
  const deleteHandeler = ()=>{
    let filteredTasks = tasks.filter(task=> task.id !== id)
    filteredTasks = filteredTasks.map((task, index)=>({...task, id: index}))
    setTasks(filteredTasks)
    localStorage.setItem('tasks',JSON.stringify(filteredTasks))
  }
  
  const checkHandeler = ()=>{
    const checked = tasks.map(task=> task.id == id ? {...task, completed : !task.completed} : task)
    setTasks(checked)
    localStorage.setItem('tasks', JSON.stringify(checked))

  }
  
  return (
    <motion.div drag dragConstraints={parentRef} className=" relative w-[250px] min-h-[300px] rounded-3xl p-5 m-5 bg-slate-900/80 text-orange-300">
    <button className="absolute top-0 right-0 m-2 text-white" onClick={deleteHandeler}> 
    <CgClose size={25} />
    </button>
    <p className={`font-semibold text-[20px] break-words overflow-hidden ${completed && "line-through"}`}>{taskName}</p>
    <div className="absolute left-0 bottom-0 mb-4 flex w-full">
      <input onClick={checkHandeler} className="ml-14 mr-3" type="checkbox" name="complete" id={id} />
      <label className="text-white" htmlFor="complete">{completed ? "Task Completed" : "Need To Do"}</label>
    </div>
    </motion.div>
  )
}

export default Task