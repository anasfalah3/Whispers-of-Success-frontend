import Hero from "@/components/Hero";
// import MusicPage from "../components/podcasts/page";
import CategoriesSlider from "@/components/CategoriesSlider";
import Podcasts from "@/components/Podcasts";
// import AlbumArtwork from "../components/podcasts/components/album-artwork";
export default function Home() {
  return (
    <div>
      <Hero />
      <CategoriesSlider/>
      <div className="text-center m-8">
        <h1 className="text-3xl font-bold">Featured Podcasts</h1>
        <p className="text-lg">Listen to our top picks</p>
      </div>
      <Podcasts />
      <div className="text-center m-8">
        <h1 className="text-3xl font-bold">New Releases</h1>
      </div>
      <Podcasts /><Podcasts /><Podcasts />
      {/* <AlbumArtwork /> */}
      {/* <MusicPage /> */}
    </div>
  );
}
