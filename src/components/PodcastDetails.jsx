import { Link } from "react-router-dom";
import { PodcastsData } from "./podcastsData";
import { Download, Play } from "lucide-react";

export default function PodcastDetails({ id }) {
  return (
    <div>
      {PodcastsData.filter((podcast) => podcast.id === parseInt(id)).map(
        (podcast, index) => (
          <div className="mb-4" key={index}>
            <section className="py-12 pb-0" id="section_2">
              <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                  <div className="lg:w-5/6 w-full">
                    <div className="flex flex-wrap">
                      <div className="lg:w-1/4 w-full">
                        <div className="rounded-2xl relative overflow-hidden shadow-md shadow-slate-400 dark:shadow-black">
                          <div className="relative block w-full h-full ">
                            <img
                              src={podcast.cover}
                              className="rounded-2xl block w-full h-full object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-3/4 w-full">
                        <div className=" block pt-3 pb-0 px-5 custom-block-info">
                          <h5 className="mb-2 text-blue-500 text-4xl font-bold">
                            <Link to={`/podcast/${podcast.id}`}>
                              {podcast.title}
                            </Link>
                          </h5>

                          <div className="flex my-5">
                            <img
                              src={podcast.avatar}
                              className=" rounded-full w-10 h-10 object-cover mr-2"
                              alt=""
                            />
                            <p>
                              {podcast.creator}
                              <strong className="block">
                                {podcast.creatorStatus}
                              </strong>
                            </p>
                          </div>

                          <p className=" text-xs opacity-80 my-5">
                            {podcast.desc}
                            {podcast.desc}
                            {podcast.desc}
                            {podcast.desc}
                          </p>

                          <div className="flex my-5">
                            <button
                              type="button"
                              className="flex items-center justify-center duration-500 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                              <Play className="mr-2 h-3 w-4" /> Listen
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center duration-500 text-black dark:text-white hover:text-white bg-transparent from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <Download className="mr-2 h-4 w-4" /> Download
                            </button>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      )}
    </div>
  );
}
