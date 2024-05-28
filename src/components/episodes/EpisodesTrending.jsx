export default function EpisodesTrending({ episodes }) {
  return (
    <section className="trending-podcast-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Trending episodes</h4>
            </div>
          </div>

          {episodes.map((episode) => (
            <div className="col-lg-4 col-12" key={episode.id}>
              <div className="custom-block custom-block-full">
                <div className="custom-block-image-wrap">
                  <a href="detail-page.html">
                    <img
                      src={`${episode.creatorImg}`}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="custom-block-info">
                  <h5 className="mb-2">
                    <a href="detail-page.html">{episode.title}</a>
                  </h5>

                  <div className="profile-block d-flex">
                    <img
                      src={`${episode.creatorImg}`}
                      className="profile-block-image img-fluid"
                      alt=""
                    />

                    <p>
                      {episode.creator}
                      <img
                        src="images/verified.png"
                        className="verified-image img-fluid"
                        alt=""
                      />
                      <strong>{episode.creatorStatus}</strong>
                    </p>
                  </div>

                  <p className="mb-0">{episode.desc}</p>

                  <div className="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" className="bi-headphones me-1">
                      <span>{episode.views}</span>
                    </a>

                    <a href="#" className="bi-heart me-1">
                      <span>{episode.likes}</span>
                    </a>

                    <a href="#" className="bi-chat me-1">
                      <span>{episode.comments}</span>
                    </a>
                  </div>
                </div>

                <div className="social-share d-flex flex-column ms-auto">
                  <a href="#" className="badge ms-auto">
                    <i className="bi-heart"></i>
                  </a>

                  <a href="#" className="badge ms-auto">
                    <i className="bi-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
