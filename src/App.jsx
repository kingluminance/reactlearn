import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ToDo from "./pages/Todo";
import Home from "./pages/home";
import AnimationPage from "./pages/AnimationPage";
import AvatarPage from "./pages/Avatar/AvatarPage";
import AvatarDetail from "./pages/Avatar/AvatarDetail";
import SinUp from "./pages/Avatar/SinUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/animation" element={<AnimationPage />}></Route>
        <Route path="/avatar" element={<AvatarPage></AvatarPage>}></Route>
        <Route
          path="/avatar/detail"
          element={<AvatarDetail></AvatarDetail>}
        ></Route>
        <Route path="/avatar/signup" element={<SinUp></SinUp>}></Route>
      </Routes>
    </>
  );
}

export default App;
