import { useState } from 'react'
import './App.css'
import Stars from './components/Stars/Stars'

function App() {
  const [count, setCount ] = useState<number>(0)
  const CountStar = (): void => {
    count < 5 ? setCount(count +1 ) : count 
  }

  return (
    <>
    <button onClick={CountStar}>Добавить</button>
    <ul className="card-body-stars u-clearfix">
    {[...Array(count)].map(star => {
      return (
        <Stars/>
      )
    })}
     </ul> 
    </>
  )
}

export default App
