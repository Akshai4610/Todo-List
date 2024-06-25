import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import Display from "./Components/Display";
import { useState } from "react";
import SelectProject from "./Components/SelectProject";

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
  
  function handleSelectProject(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
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
  
  function handleDeleteProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((prevValue)=>prevValue.id !== prevState.selectedProjectId)
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

  const selectedProject= projectsState.projects.find(projects=>projects.id === projectsState.selectedProjectId)
  
  let content = <SelectProject project={selectedProject} onDelete={handleDeleteProject}/>;

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
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
