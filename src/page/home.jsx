import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div className="nav-bar">
        <h2>Home Page</h2>
      </div>
      <button
        onClick={() => {
          navigate("/todo");
        }}
      >
        ToDo 페이지
      </button>
    </>
  );
}

export default Home;
