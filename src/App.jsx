import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import ToDo from './page/Todo';
import Home from './page/home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<ToDo/>}/>
      </Routes>
    </>
  )
}

export default App
