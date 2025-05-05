/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */


import { useState } from "react";
import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows[0]); // Default to first show
  const [selectedEpisode, setSelectedEpisode] = useState(null); // Default to no episode

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection tvShows={tvShows} setSelectedShow={setSelectedShow} />
        <EpisodeList 
          name={selectedShow.name} 
          episodes={selectedShow.episodes} 
          selectedEpisode={selectedEpisode} 
          setSelectedEpisode={setSelectedEpisode} 
        />
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}
