/* eslint-disable */
import Button from '../components/Button'
import styles from '../assets/styles/App.module.css'
import { useState, useEffect } from 'react'

// eslint-disable-next-line require-jsdoc
function Hello() {
  useEffect(() => {
    console.log('hi')
    return () => {
      console.log('bye')
    }
  }, [])
  return <h1>HELLO</h1>
}
function Lab() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [showing, setShowing] = useState(false)
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (e) => {
    setKeyword(event.target.value)
  }
  const onClickShowing = () => {
    setShowing((prev) => !prev)
  }
  console.log(1)

  useEffect(() => {
    console.log(2)
  }, [])

  useEffect(() => {
    console.log('keyword changed')
    if (keyword !== '' && keyword.length > 6) console.log('search', keyword)
  }, [keyword])

  useEffect(() => {
    console.log('counter changed')
  }, [counter])

  return (
    <div className={styles.app}>
      <div className={styles.title}>Hi</div>
      <input type="text" value={keyword} onChange={onChange} placeholder="search" />
      <h1>{counter}</h1>
      <button onClick={onClick}>hi</button>
      <hr style={{ width: '100%' }} />

      <button onClick={onClickShowing}>set showing</button>
      <div>{showing ? <Hello /> : null}</div>
    </div>
  )
}

export default Lab
