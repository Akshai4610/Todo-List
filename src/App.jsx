import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  
  function handleCancelProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects((prevState) => {
      const incomingProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, incomingProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Display btnClicked={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        btnClicked={handleStartProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
