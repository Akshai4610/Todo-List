import { useRef } from "react";
import InputLabel from "./InputLabel.jsx";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function btnSave() {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    //Validation.............

    onAdd({
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={btnSave}
            className="bg-stone-800 px-6 py-2 rounded-md border-r-stone-800 text-stone-50 hover:bg-stone-950 "
          >
            Save
          </button>
        </li>
      </menu>
      <form>
        <div>
          <InputLabel ref={title} type="text" Label="Title" required />
          <InputLabel ref={description} Label="Description" textArea />
          <InputLabel ref={dueDate} type="date" Label="Due Date" />
        </div>
      </form>
    </div>
  );
}
