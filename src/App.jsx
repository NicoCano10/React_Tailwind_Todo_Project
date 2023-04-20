import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = () => { 
  return <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-center bg-gray-300 min-h-screen">
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
      <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">TODO</h1>
      <button><MoonIcon/></button>
      </div>
      <form className="bg-white overflow-hidden rounded-md py-2 flex gap-4 items-center px-4 mt-10">
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input className="w-full text-gray-400 outline-none shadow-md shadow-red-500" type="text" placeholder="Create a new Todo..."/>
      </form>
    </header>

    <main className="container mx-auto px-4 mt-8 bg-white rounded-md py-2">
      <div className="bg-white rounded-md [&>article]:p-4">
      <article className="flex gap-4 border-b-gray-500 border-b">
        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
        <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>

      <article className="flex gap-4 border-b-gray-500 border-b">
        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
        <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>

      <article className="flex gap-4 border-b-gray-500 border-b">
        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
        <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>

      <section className="px-4 py-4 flex justify-between">
        <span className="text-gray-400">5 items left</span>
        <button className="text-gray-400">Clear Completed</button>
      </section>
      </div>
    </main>

    <section className="container mx-auto px-4 mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
      <button className="text-blue-600">All</button>
      <button className="hover:text-blue-600">Active</button>
      <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>

    <p className="text-center mt-8">Drag and drop to reorder list</p>

  </div>
}

export default App