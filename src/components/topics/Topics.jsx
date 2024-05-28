export default function Topics({topics}) {
  return (
    <section className="topics-section section-padding pb-0" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Topics</h4>
            </div>
          </div>

          {topics.map((topic) => (
            <div
              className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
              key={topic.id}>
              <div className="custom-block custom-block-overlay">
                <a href="detail-page.html" className="custom-block-image-wrap">
                  <img
                    src={`images/topics/${topic.img}`}
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                </a>

                <div className="custom-block-info custom-block-overlay-info">
                  <h5 className="mb-1">
                    <a href="listing-page.html">{topic.name}</a>
                  </h5>

                  <p className="badge mb-0">{topic.number} Episodes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
