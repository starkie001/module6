import { useState } from 'react'
import  './App.css'
import ExampleComponent from './components/Greeting'
import CatsList from './components/BigCats.jsx'
import SingleCat from './components/SingleCat.jsx'

function App() {

  return (
    <>
      <ExampleComponent name="John Doe"/>
      <CatsList />
      <SingleCat 
        name="Lion"
      />

    </>
  )
}

export default App
