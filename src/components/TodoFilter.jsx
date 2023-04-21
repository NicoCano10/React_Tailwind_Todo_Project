const TodoFilter = ({changeFilter, filter}) => { 
    return (
       <section className="container mx-auto mt-8 transition-all duration-1000">
           <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
           <button onClick={() => {changeFilter("All")}} className={`${filter === "All" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600" }`}>All</button>
           <button onClick={() => {changeFilter("Active")}} className={`${filter === "Active" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600" }`}>Active</button>
           <button onClick={() => {changeFilter("Completed")}} className={`${filter === "Completed" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600" }`}>Completed</button>
           </div>
       </section>
    )
 }

export default TodoFilter