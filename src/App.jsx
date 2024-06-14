import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[activity,setActivity] = useState("")
  const[textlist,setTextlist] = useState([])
  
  function add(){
    setTextlist((textlist)=>{
      const updatelist = [...textlist,activity]
      setActivity('')
      return updatelist
    })
  }

  const remove = (index) => {
    setTextlist(textlist.filter((data, i) => i!== index));
  }


  return (
    <>
      <h1>Todo-List</h1>
      <p>This Is My Todo List Project Using React</p>
      <hr />


      <div className='d'>
        <input type="text" className='text' placeholder='Enter text here...' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button className='btn' onClick={add}>Add</button>
      </div>

      {
        textlist !=[] && textlist.map((data,index)=>{
          return(
              <div className='data'>{data}  <div><button className='dbtn' onClick={() => remove(index)}>Delete</button></div> </div>
          )
        })
      }
    </>
  )
}

export default App
