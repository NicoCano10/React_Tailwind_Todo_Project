import React, { useEffect } from "react"
import CheckIcon from "./icons/CheckIcon"
import CrossIcon from "./icons/CrossIcon"

const TodoItem = React.forwardRef( ({todo, removeTodo, updateTodo, ...props}, ref) => { 

    const {id, title, Completed} = todo

    useEffect(() => {
        console.log(todo);
    })

    return (
        <article {...props} ref={ref} className="flex gap-4 border-b-gray-500 border-b dark:bg-gray-800 transition-all duration-1000">
            <button 
            onClick={() => updateTodo(id)}
            className={`rounded-full border-2 w-5 h-5 flex-none ${Completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center" : "inline-block"} `}>
            {
                Completed && <CheckIcon/>
            }
            </button>
            <p className="text-gray-600 grow dark:text-gray-400">{title}</p>
            <button onClick={() => removeTodo(id)} className="flex-none"><CrossIcon/></button>
        </article>
    )
 })

export default TodoItem