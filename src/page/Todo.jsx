import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import { useState } from "react";
import ToDoInput from "../components/ToDoInput";

function ToDo() {
  let navigate = useNavigate();

  let [toDo, setToDo] = useState(["a", "s"]);
  return (
    <>
      <div className="nav-bar">
        <h2>📝 ToDo Page</h2>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </button>
      </div>
      <div>
        <ToDoInput></ToDoInput>
      </div>
    </>
  );
}

export default ToDo;
