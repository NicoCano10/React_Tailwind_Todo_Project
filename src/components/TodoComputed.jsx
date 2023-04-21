const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return (
        <section className="px-4 py-4 flex justify-between bg-white rounded-b-md mx-auto container dark:bg-gray-800 transition-all duration-1000">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={clearCompleted} className="rounded-md text-white shadow-indigo-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">Clear Completed</button>
        </section>
    )
 }

export default TodoComputed