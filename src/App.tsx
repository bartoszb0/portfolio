import AboutMe from "./components/AboutMe";
import OtherProjects from "./components/OtherProjects";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <AboutMe />
      <SelectedWork />
      <OtherProjects />
    </main>
  );
}

export default App;
