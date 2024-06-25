import Button from "./Button";

export default function SideBar({
  btnClicked,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h1>
      <div>
        <Button onClick={btnClicked}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((projectData) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (projectData.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={projectData.id}>
              <button
                onClick={() => onSelect(projectData.id)}
                className={cssClasses}
              >
                {projectData.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
