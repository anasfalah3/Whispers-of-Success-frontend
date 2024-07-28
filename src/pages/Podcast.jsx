import { useParams } from "react-router-dom";
import PodcastDetails from "@/components/PodcastDetails";
import Podcasts from "@/components/Podcasts";
import { SlArrowRight } from "react-icons/sl";
import Comments from "@/components/Comments";

const Podcast = () => {
  const { id } = useParams();
  return (
    <div>
      <PodcastDetails id={id} />
      <div className="text-start m-8 flex items-center cursor-pointer">
        <h1 className="text-3xl font-bold mr-3 duration-500 hover:mr-6">
          More By Anas Falah{" "}
        </h1>
        <SlArrowRight />
      </div>
      <Podcasts />
      <h1 className="text-3xl font-bold m-8 mr-3">
        Comments{" "}
      </h1>
      <Comments />
    </div>
  );
};

export default Podcast;
