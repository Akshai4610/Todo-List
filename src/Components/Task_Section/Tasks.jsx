import NewTask from "./NewTask";

export default function Tasks({tasks, taskAdd, taskDelete}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project doesn't have any task yet ...!
        </p>
      )}
      <NewTask taskAdd={taskAdd} />
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.task}</span>
              <button
                onClick={() => taskDelete(task.taskId)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
