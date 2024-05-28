import Hero from "../hero/Hero";
import EpisodesLastest from "../episodes/EpisodesLastest";
import EpisodesTrending from "../episodes/EpisodesTrending";
import Topics from "../topics/Topics";
import { episodes,topics } from "./Data";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <EpisodesLastest episodes={episodes}/>
        <Topics topics={topics}/>
        <EpisodesTrending episodes={episodes}/>
      </main>
    </>
  );
}

export default Home;
