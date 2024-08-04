import { useContext, useRef } from "react"
import Task from "./Task"
import todoContext from "../Context/todoContext"


function Tasks() {

  const {tasks} = useContext(todoContext)
  const reference = useRef(null)
  return (
    <div ref={reference} className="flex flex-wrap items-center w-full">
      {
      tasks.map(task => <Task {...task} parentRef={reference}/>)
      }
    </div>
  )
}

export default Tasks