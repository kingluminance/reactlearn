import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoInput() {
  const { register, handleSubmit, reset } = useForm();
  let [toDo, setToDo] = useState(["a", "s"]);

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            let copyToDo = [...toDo];
            copyToDo.push(data.name);
            setToDo(copyToDo);
            reset();
          })}
        >
          <input {...register("name")} placeholder="TODO입력" />
          <button type="submit">제출</button>
        </form>
      </div>
      <ul>
        {toDo.map((doList, idx) => {
          return <li key={idx}>{doList}</li>;
        })}
      </ul>
    </>
  );
}

export default ToDoInput;
