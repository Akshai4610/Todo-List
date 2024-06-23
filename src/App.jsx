import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleChange() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Display btnClicked={handleChange} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar btnClicked={handleChange} />
      {content}
    </main>
  );
}

export default App;
