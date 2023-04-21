import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import Header from "./components/Header"
import { useState } from "react"

const initialStateTodos = [

    {id: 1, title: "Go to Play Soccer", Completed: true,},
    {id: 2, title: "Continuar Demon Slayer", Completed: false,},
    {id: 3, title: "Regresar a mi Hermosa Tierra", Completed: false,},
    {id: 4, title: "Ver una Peli con Isa", Completed: false,},
    {id: 5, title: "Empezarme The Last Of Us sin que me de Miedo 😅", Completed: false}

]


const App = () => { 

  const [todos,setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      Completed: false
    }

    setTodos ([...setTodos, newTodo])

  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? {...todo, Completed: !todo.Completed} : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.Completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.Completed));
  }

  const [filter, setFilter] = useState("All")

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => !todo.Completed);
      case "Completed":
        return todos.filter((todo) =>todo.Completed);
      default:
        return todos;
    }
  }

  return <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-center bg-gray-300 min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000">
      <Header/>


    <main className="container mx-auto mt-8 px-4">
      
      <TodoCreate createTodo={createTodo}/>

      <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>

      <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>

      <TodoFilter changeFilter={changeFilter} filter={filter}/>

    </main>

    <footer className="text-center mt-8 dark:text-white">Drag and drop to reorder list</footer>

  </div>
}

export default App