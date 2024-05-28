
export default function EpisodesLastest({episodes}) {
  
  return (
    <section
      className="latest-podcast-section section-padding pb-0"
      id="section_2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Lastest episodes</h4>
            </div>
          </div>

          {episodes.map((episode) => (
            <div className="col-lg-6 col-12" key={episode.id}>
              <div className="custom-block d-flex">
                <div className="">
                  <div className="custom-block-icon-wrap">
                    <div className="section-overlay"></div>
                    <a
                      href="detail-page.html"
                      className="custom-block-image-wrap">
                      <img
                        src={`${episode.cover}`}
                        className="custom-block-image img-fluid"
                        alt=""
                      />

                      <a href="#" className="custom-block-icon">
                        <i className="bi-play-fill"></i>
                      </a>
                    </a>
                  </div>

                  <div className="mt-2">
                    <a href="#" className="btn custom-btn">
                      Subscribe
                    </a>
                  </div>
                </div>

                <div className="custom-block-info">
                  <div className="custom-block-top d-flex mb-1">
                    <small className="me-4">
                      <i className="bi-clock-fill custom-icon"></i>
                      {episode.duration} Minutes
                    </small>

                    <small>
                      Episode <span className="badge">{episode.epnum}</span>
                    </small>
                  </div>

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

                    <a href="#" className="bi-download">
                      <span>{episode.downloads}</span>
                    </a>
                  </div>
                </div>

                <div className="d-flex flex-column ms-auto">
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
