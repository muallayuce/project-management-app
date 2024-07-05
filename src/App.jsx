import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,  //we are not adding new project or we didn't choose any
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null, //adding a new project
      }
    })
  }


  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} /> ;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
