import { useContext, useRef } from "react"
import todoContext from "../Context/todoContext"

function Form() {

    const {setTasks, tasks} = useContext(todoContext)
    const intputRef = useRef(null)
    const formHandler = (e)=>{
        e.preventDefault()
        const taskName = intputRef.current.value
        const newTask = {
            taskName,
            completed: false,
            id: tasks.length
        }
        intputRef.current.value = ''
        setTasks(pre =>[...pre, newTask])
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
        }
  
  
    return (
    <>
    <form onSubmit={formHandler} className="overflow-hidden flex flex-col rounded-3xl mx-auto h-36 border text-xl bg-slate-400 w-64 p-4">
        <input ref={intputRef} maxLength={177} className="rounded-2xl text-md px-3 py-1 mt-5" type="text" required/>
        <button className="w-32 h-10 rounded-2xl mx-auto px-2 bg-purple-500 hover:bg-purple-500/90 hover:scale-[1.02] shadow-md shadow-purple-400 mt-3 text-sm font-semibold text-white">Add What ToDo</button>
    </form>
    </>
  )
}

export default Form