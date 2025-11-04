import SelectedProject from "./SelectedProject/SelectedProject";

export default function SelectedWork() {
  return (
    <>
      <div id="selectedWorkDiv">
        <h1>Selected work</h1>
        <div>
          <SelectedProject
            title={"GymTracker"}
            wip={false}
            description={
              "A full-stack, mobile-first application built with React and Django REST Framework that allows authenticated users to manage and track complex workouts. Features custom logic for seamless Workout Mode continuity and reliable progress logging."
            }
            github={"https://github.com/bartoszb0/GymTrackerBackend"}
            demo={"https://gymtracker-7lua.onrender.com/"}
            technologies={[
              "Javascript",
              "React",
              "Python",
              "Django",
              "Postgres",
            ]}
          />
          <SelectedProject
            title={"Rapperdle"}
            wip={false}
            description={
              "TypeScript/React front-end Wordle-like game utilizing complex state management for guess validation and visual feedback."
            }
            github={"https://github.com/bartoszb0/RapperdleReact"}
            demo={"https://rapperdle.onrender.com/"}
            technologies={["Typescript", "React"]}
          />
          <SelectedProject
            title={"Typer"}
            wip={false}
            description={
              "React/JS utility tool developed from scratch. Focuses on DOM manipulation and advanced event handling to accurately track WPM and character errors in real-time."
            }
            github={"https://github.com/bartoszb0/typer"}
            demo={"https://typertyper.netlify.app/"}
            technologies={["Javascript", "React"]}
          />
          <SelectedProject
            title={"AuctionsApp"}
            wip={true}
            description={
              "Service for creating auctions and bidding with custom logic."
            }
            github={"https://github.com/bartoszb0/AuctionsAppBackend"}
            technologies={[
              "Typescript",
              "React",
              "Python",
              "Django",
              "Postgres",
            ]}
          />
        </div>
      </div>
    </>
  );
}
