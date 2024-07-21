import { Bookmark, Download, Heart, MessageCircle } from "lucide-react";
import { PodcastsData } from "./podcastsData";
import { Link } from "react-router-dom";

export default function Podcasts() {
  return (
    <section>
      <div className="flex justify-between flex-wrap mb-4">
        {PodcastsData.map((podcast, index) => (
          <>
            <div className="mb-5" key={index}>
              <div className="border-blue-300 border-2 rounded-2xl relative overflow-hidden p-7  border-transparent hover:border-blue-500 hover:shadow-md hover:shadow-blue-300">
                <div className=" relative block h-full ">
                  <Link to={`/podcast/${podcast.id}`} className="block">
                    <img
                      src={podcast.cover}
                      className="block w-full h-52 rounded-2xl object-cover"
                      alt=""
                    />
                  </Link>
                </div>

                <div className=" block pt-3 pb-0 px-5 custom-block-info">
                  <h5 className="mb-2 text-blue-500 text-xl font-bold">
                    <Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link>
                  </h5>

                  <div className="flex mt-2">
                    <img
                      src={podcast.avatar}
                      className=" rounded-full w-12 h-12 object-cover mr-2"
                      alt=""
                    />
                    <p>
                      {podcast.creator}
                      <strong className="block">{podcast.creatorStatus}</strong>
                    </p>
                  </div>

                  <p className=" text-xs opacity-80 my-3">{podcast.desc}</p>

                  <div className="flex justify-between mt-3">
                    <span className="flex align-middle justify-center uppercase ml-1 hover:text-blue-500">
                      <Download />
                      <span>{podcast.downloads}</span>
                    </span>

                    <span className="flex align-middle justify-center uppercase ml-1 hover:text-blue-500">
                      <Heart />
                      <span>{podcast.likes}</span>
                    </span>

                    <span className="flex align-middle justify-center uppercase ml-1 hover:text-blue-500">
                      <MessageCircle />
                      <span>{podcast.comments}</span>
                    </span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 m-12 flex flex-col ms-auto">
                  <Link
                    to={"#"}
                    className="bg-black hover:bg-blue-300 text-white rounded-full flex items-center justify-center text-center w-10 h-10 my-2  pb-1 badge ms-auto">
                    <Heart />
                  </Link>

                  <Link
                    to={"#"}
                    className="bg-black hover:bg-blue-300 text-white rounded-full flex items-center justify-center text-center w-10 h-10 my-2  pb-1 badge ms-auto">
                    <Bookmark />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
