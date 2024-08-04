import {useState } from "react"
import Form from "./components/Form"
import Tasks from "./components/Tasks"
import todoContext from "./Context/todoContext"

function App() {
  const localStorageData = localStorage.getItem('tasks') == null ? [] : JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(localStorageData)
  return (
    <div className="w-full bg-[url('../public/background.jpg')] bg-cover pt-12  h-screen relative overflow-hidden">
    <h1 className="absolute text-[150px] select-none top-[40%] left-[25%] translate-x-[-50px] translate-y-[-50px] text-slate-800 opacity-20">Drag and Play</h1>
    <todoContext.Provider value={{tasks, setTasks}}>
    <Form/>
    <Tasks/>
    </todoContext.Provider>
    </div>
  )
}

export default App 
