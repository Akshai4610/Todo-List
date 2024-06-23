import InputLabel from './InputLabel.jsx'
export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-800 px-6 py-2 rounded-md border-r-stone-800 text-stone-50 hover:bg-stone-950 ">
            Save
          </button>
        </li>
      </menu>
      <form >
                <div>
                    <InputLabel Label='Title'/>
                    <InputLabel Label='Description' textArea/>
                    <InputLabel Label='Due Date'/>
                </div>
        </form>
    </div>
  );
}
