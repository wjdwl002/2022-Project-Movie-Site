import styles from '../assets/styles/App.module.scss'
import { useState, useEffect } from 'react'

function ToDoApp() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (e) => {
    setToDo(e.target.value)
    console.log('changed')
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (toDo === '') {
      return
    }
    setToDo('')
    setToDos((prev) => [toDo, ...prev])
  }
  console.log(toDos)

  return (
    <div className={styles.app}>
      <h1>TODOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={'WRITE YOUR TODO'}
          onChange={onChange}
        />
        <button>ADD TO DO</button>
      </form>
      <hr style={{ width: '100%' }} />
      <div>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  )
}
export default ToDoApp
