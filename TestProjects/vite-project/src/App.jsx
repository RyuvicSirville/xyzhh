import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [todos, setTodos] = useState([])
    // fetch all todos from server

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input type="text" />
      </div>
    </>
  )
}

function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    return <div>
        {props.title}
    </div>
}
// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(NavigationBar());

export default MyApp;