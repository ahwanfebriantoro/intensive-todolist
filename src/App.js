import { useState } from 'react'
import './styles.css'

export default function App() {
  const [currentValue, setCurrentValue] = useState('')
  const [values, setValues] = useState([])
  const [error, setError] = useState('')

  function simpanCurrentValue(e) {
    setCurrentValue(e.target.value)
  }

  function hapusSatuArray(element) {
    const cpArr = [...values]
    const result = cpArr.filter((el) => {
      return el !== element
    })
    setValues(result)
  }

  function simpanValue() {
    const newData = {
      id: Date.now(),
      value: currentValue
    }
    setValues([...values, newData])
    // [{id: 121, value: 'awaw'}, {id: 1241, value: 'norman'}]
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input onChange={simpanCurrentValue} />
      <button onClick={simpanValue}>+</button>
      <p style={{ margin: 0, color: 'red' }}>{error}</p>
      <ul>
        {values.map((item) => {
          return (
            <div key={item.id} style={{ display: 'inline' }}>
              <li>
                {item.value}
                <button
                  style={{ background: 'red', marginLeft: 10 }}
                  onClick={() => hapusSatuArray(item)}>
                  X
                </button>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
