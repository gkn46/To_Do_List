import React from 'react'

function TaskListItem({item, editTask, removeTask, doneTask}) {
  return (
   <>
     <li className={`list-group-item ${item.isDone && 'bg-success bg-gradient'}`} 
                key={item.uuid}>
                 {item.priority && <span 
                 className='badge text-bg-secondary m-2'>Compulsory</span>}   
                {item.task}
                <div className='btn-group float-end' role="group">

                <button onClick={()=>doneTask(item.uuid)} 
                className='btn btn-sm btn-success float-end'>Done</button>
                
                <button onClick={()=>removeTask(item.uuid)} 
                className='btn btn-sm btn-danger float-end'>Remove</button>
                </div>
            
            </li>
   </>
  )
}

export default TaskListItem