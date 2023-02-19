import { useState, useEffect } from 'react'
import './App.css'
import fetchDataFromAPi from './utils/api'

function App() {

  useEffect(() => {
    apiTesting()
  },[])
  const apiTesting = () => {
    fetchDataFromAPi('/movie/popular').then((res) => {
      console.log(res)
    })
  }

  return (  
    <div className="App">

    </div>
  )
}

export default App
