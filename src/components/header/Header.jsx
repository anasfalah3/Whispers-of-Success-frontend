export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand me-lg-5 me-0" href="index.html">
          <img
            src="images/pod-talk-logo.png"
            className="logo-image img-fluid"
            alt="templatemo pod talk"
          />
        </a>

        <form
          action="#"
          method="get"
          className="custom-form search-form flex-fill me-3"
          role="search">
          <div className="input-group input-group-lg">
            <input
              name="search"
              type="search"
              className="form-control"
              id="search"
              placeholder="Search Podcast"
              aria-label="Search"
            />

            <button type="submit" className="form-control" id="submit">
              <i className="bi-search"></i>
            </button>
          </div>
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Pages
              </a>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="listing-page.html">
                    Listing Page
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="detail-page.html">
                    Detail Page
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>

          <div className="ms-4">
            <a
              href="#section_3"
              className="btn custom-btn custom-border-btn smoothscroll">
              Log in
            </a>
          </div>
          <div className="ms-4">
            <a
              href="#section_3"
              className="btn custom-btn custom-border-btn smoothscroll">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
