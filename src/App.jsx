import { useState } from 'react';
import TaskForm from './TaskForm';



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="container">
      <h1>Check List</h1>
      <TaskForm />
    </div>
   </>
  )
}

export default App
