import { useState } from "react";
export default function NewTask({taskAdd}) {
  const [taskState, setTask] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }
  function btnClicked() {
    if(taskState.trim()===''){
        return;
    }else{
      taskAdd(taskState);
      setTask("");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleTaskChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={taskState}
      />
      <button
        onClick={btnClicked}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
