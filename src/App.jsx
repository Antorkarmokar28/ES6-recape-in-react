import Sunglass from './components/sunglass'
import './App.css'
import { watch } from './Utilities/calculate'
import Watch from './components/watch';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const watches = watch;

  const [sunglasses, setSunglasses] = useState([])

  useEffect(() => {
    fetch('sunglasses.json')
      .then(res => res.json())
      .then(data => setSunglasses(data))
  }, [])
  
  return (
    <>
      {
        sunglasses.map(sunglass => <Sunglass key={sunglass.id} sunglass={sunglass}></Sunglass>)
      }
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
