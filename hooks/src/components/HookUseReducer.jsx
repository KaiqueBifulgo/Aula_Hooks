import { useReducer, useState } from "react"

const HookUseReducer = () => {

    // useREDUCER
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })


    // AVANÇANDO NO UseREDUCER
    const initialTasks = [
        {id: 1, breed: "Doberman"},
        {id: 2, breed: "Malamute"},
        {id: 3, breed: "Pastor alemão"}
    ]

    const taskReducer = (state, action) => {

        switch(action.type) {
            case "ADD":

              const newTask = {
                id: Math.random(),
                breed: taskText
              }  

              setTaskText("");

              return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"})
    } 

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

  return (  
    <div>
        <h2>useReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar numero</button>
        <h3>Outras raças</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="Enviar" />
        </form>
        <ul>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.breed}</li>
        ))}
        </ul>
    </div>
  )
}

export default HookUseReducer