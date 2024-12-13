import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTasks] = useState('')
  const [list, setList] = useState([])
  
  let occourances = (e) =>{
    setTasks(e.target.value)
  }

  let create = () =>{
    if (task.trim() !== '') { 
      setList([...list, {task}])
      setTasks('')
    }
  }

  let edit = () =>{
    
  }

  let deleteit = (taskID) => {
    const updatedList = list.filter((item) => {
     return item.id !== taskID
    });
    setList(updatedList);
  }
  


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="box">
          <div className="createTasks">
            <input type="text" placeholder='Create task' value={task} onChange={occourances}/><button onClick={create}>Create</button>
          </div>
          <div className="yourTasks">
            <div className='yourTasks'><h2>Your Tasks</h2></div>
            <div className="list">
              {list.map((e) =>{
                return(
              <div key={e.id}>
                <div>
                <input type="checkbox" />
                <p>{e.task}</p>
                </div>
                <div className="editor">
                  <button onClick={edit}>Edit</button>
                  <button onClick={() => deleteit(e.id)}>Delete</button>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
