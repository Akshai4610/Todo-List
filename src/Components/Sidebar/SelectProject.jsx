import Tasks from "../Task_Section/Tasks";
export default function SelectedProject({
  projectSelect,
  onDelete,
  taskAdd,
  taskDelete,
  tasks,
}) {
  const formattedDate = new Date(projectSelect.dueDate).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 uppercase">
            {projectSelect.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectSelect.description}
        </p>
      </header>
      <Tasks taskAdd={taskAdd} taskDelete={taskDelete} tasks={tasks} />
    </div>
  );
}