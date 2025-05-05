import { tvShows } from "./data";
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ tvShows, setSelectedShow }) {
  return (
    <nav className="shows">
      {tvShows.map((show) => (
        <div 
          key={show.id} 
          onClick={() => setSelectedShow(show)} // Update selected show
        >
          {show.name}
        </div>
      ))}
    </nav>
  );
}
