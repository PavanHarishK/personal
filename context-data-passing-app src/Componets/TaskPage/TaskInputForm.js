import React, { useEffect, useState } from "react";
import FormsNewInputs from "./FormsNewInputs";


const TaskInputForm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  //Main Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    const newInputs = {
      title: title,
      time: time,
    };
    setInputs([...inputs, newInputs]);
    setTitle("");
    setTime("");
  };

  //delete handler
  const deleteHandler =(index)=>{
    const updatedInputs = [...inputs];
    updatedInputs.splice(index,1);
    setInputs(updatedInputs)
  }

  //Task Change Handler
  const titleSubmitHandler = (event) => {
    setTitle(event.target.value);
  };
  // Time Change Handler
  const timeSubmitHandler = (event) => {
    setTime(event.target.value);
  };
  console.log(inputs)
  return (
    <div>
      <h3>Input Data</h3>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <label>Task title : </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={titleSubmitHandler}
              />
            </div>
            <div>
              <label>Time Required in Hrs : </label>
              <input
                type="number"
                id="time"
                value={time}
                onChange={timeSubmitHandler}
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          {inputs.length >0 && (<FormsNewInputs inputs={inputs} onDelete={deleteHandler}/> )}
        </div>
      </div>
    </div>
  );
};

export default TaskInputForm;
