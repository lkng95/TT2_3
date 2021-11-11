import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <ProjectsPage />
      <Project
        id="1"
        uid="4"
        name="RTF"
        budget="12000"
        description="Realtime Face Recognition"
      />
    </div>
  );
}

export default App;
