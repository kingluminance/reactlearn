import { Route, Routes } from "react-router-dom";
import ToDo from "./pages/Todo";
import Home from "./pages/home";
import AnimationPage from "./pages/AnimationPage";
import AvatarPage from "./pages/Avatar/AvatarPage";
import AvatarDetail from "./pages/Avatar/AvatarDetail";
import SinUp from "./pages/Avatar/SinUp";
import AuthPage from "./pages/Avatar/AuthPage";
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
        <Route
          path="avatar/signup/auth"
          element={<AuthPage></AuthPage>}
        ></Route>{" "}
        {/* 제한을 걸어야 하나 */}
      </Routes>
    </>
  );
}

export default App;
