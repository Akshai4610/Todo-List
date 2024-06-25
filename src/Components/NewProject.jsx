import { useRef } from "react";
import InputLabel from "./InputLabel.jsx";
import DialogModal from "./dialogModal.jsx";
import HeadPara from "./HeadPara.jsx";

const para_3 =
  "Please make sure, you provide a valid value for every input field.";

export default function NewProject({ onAdd, onCancel }) {
  const model = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function btnSave() {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    //Validation.............
    if (
      projectTitle.trim() === "" ||
      projectDescription.trim() === "" ||
      projectDueDate.trim() === ""
    ) {
      //error modal
      model.current.open();
    }

    onAdd({
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
    });
  }

  return (
    <>
      <DialogModal ref={model} btnCaption="Understood">
        <HeadPara head_2="Invalid Input" para_3={para_3}>
          Oops...! looks like you forgot to enter a value
        </HeadPara>
      </DialogModal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 "
            >
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
            <InputLabel ref={dueDate} type="date" max='9999-12-31' Label="Due Date" />
          </div>
        </form>
      </div>
    </>
  );
}
