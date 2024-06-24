import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import Display from "./Components/Display";
import { useState,useId } from "react";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjects(prev=>{
      const incomingProject={
        ...projectData,
            id:useId()
      }
      return{
        ...prev,
        projects:[...prev.projects,incomingProject]
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Display btnClicked={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar btnClicked={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
