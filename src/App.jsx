import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
import ExampleComponent from './components/Greeting'
import CatsList from './components/BigCats.jsx'
import SingleCat from './components/SingleCat.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <ExampleComponent name="John Doe"/>
      <CatsList />
      <SingleCat 
        name="Lion"
        latinName="Panthera leo"
        image="https://cdn.pixabay.com/photo/2014/02/28/19/42/lion-cub-277121_640.jpg"
      />

    </>
  )
}

export default App
