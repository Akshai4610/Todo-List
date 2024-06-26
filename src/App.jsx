import SideBar from "./Components/Sidebar/SideBar";
import NewProject from "./Components/NewProject";
import Display from "./Components/Display";
import { useState } from "react";
import SelectProject from "./Components/Sidebar/SelectProject";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects((prevState) => {
      const ProjectId= Math.random()
      const incomingProject = {
        ...projectData,
        projectId:ProjectId
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, incomingProject],
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
        projects: prevState.projects.filter(
          (filterValue) => filterValue.projectId !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(tasks) {
    setProjects((prevState) => {
     
      const tasksId=Math.random()
      
      const incomingTask = {
        task:tasks,
        taskId:tasksId,
        projectId: prevState.selectedProjectId,
      };
      
      return {
        ...prevState,
        tasks: [...prevState.tasks, incomingTask],
      };
    });
  }

  function handleDeleteTask(selectedId) {
    setProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (taskValue) => taskValue.taskId !== selectedId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (projects) => projects.projectId === projectsState.selectedProjectId
  );

  let content = (
    <SelectProject
      projectSelect={selectedProject}
      onDelete={handleDeleteProject}
      taskAdd={handleAddTask}
      taskDelete={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Display btnProjectStart={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        btnProjectStart={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
