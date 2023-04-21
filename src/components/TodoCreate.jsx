import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

    const {title, setTitle} = useState('')

    const handleSubmitAddTodo = (e) => { 
        e.preventDefault();
        if (!title.trim()) {
           return setTitle('')
        }

        createTodo(title)
        setTitle("");

     }

    return (
        <div className="container mx-auto bg-white rounded-md px-4 dark:bg-gray-800 transition-all duration-1000">
        <form onSubmit={handleSubmitAddTodo} className="bg-white overflow-hidden rounded-md py-6 flex gap-4 items-center px-4 mt-10 dark:bg-gray-800 transition-all duration-1000">
            <span className="rounded-full border-2 w-5 h-5 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
            <input 
                className="w-full text-gray-400 outline-none shadow-md shadow-red-500 dark:bg-gray-800 transition-all duration-1000"
                type="text" 
                placeholder="Create a new Todo..."
                value={title}
                onChange={(e) => setTitle (e.target.value)}
            
            
            
            />
        </form>
        </div>
    )
 }

export default TodoCreate