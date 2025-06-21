import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ToDo from "./page/Todo";
import Home from "./page/home";
import AnimationPage from "./page/AnimationPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/animation" element={<AnimationPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
