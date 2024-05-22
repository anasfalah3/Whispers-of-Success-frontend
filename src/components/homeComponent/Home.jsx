
function Home() {

  return (
    <>
      <main>

<nav className="navbar navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand me-lg-5 me-0" href="index.html">
            <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk"/>
        </a>

        <form action="#" method="get" className="custom-form search-form flex-fill me-3" role="search">
            <div className="input-group input-group-lg">    
                <input name="search" type="search" className="form-control" id="search" placeholder="Search Podcast" aria-label="Search"/>

                <button type="submit" className="form-control" id="submit">
                    <i className="bi-search"></i>
                </button>
            </div>
        </form>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="index.html">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>

                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                        <li><a className="dropdown-item" href="listing-page.html">Listing Page</a></li>

                        <li><a className="dropdown-item" href="detail-page.html">Detail Page</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>

            <div className="ms-4">
                <a href="#section_3" className="btn custom-btn custom-border-btn smoothscroll">Get started</a>
            </div>
        </div>
    </div>
</nav>


<section className="hero-section">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <div className="text-center mb-5 pb-2">
                    <h1 className="text-white">Listen to Pod Talk</h1>

                    <p className="text-white">Listen it everywhere. Explore your fav podcasts.</p>

                    <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Start listening</a>
                </div>

                <div className="owl-carousel owl-theme">
                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/smiling-business-woman-with-folded-hands-against-white-wall-toothy-smile-crossed-arms.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">
                                Candice
                                <img src="images/verified.png" className="owl-carousel-verified-image img-fluid" alt=""/>
                            </h4>

                            <span className="badge">Storytelling</span>

                            <span className="badge">Business</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-twitter"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-facebook"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/handsome-asian-man-listening-music-through-headphones.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">
                                William
                                <img src="images/verified.png" className="owl-carousel-verified-image img-fluid" alt=""/>
                            </h4>

                            <span className="badge">Creative</span>

                            <span className="badge">Design</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-twitter"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-pinterest"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/cute-smiling-woman-outdoor-portrait.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">Taylor</h4>

                            <span className="badge">Modeling</span>

                            <span className="badge">Fashion</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-twitter"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-pinterest"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/man-portrait.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">Nick</h4>

                            <span className="badge">Acting</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-youtube"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/woman-posing-black-dress-medium-shot.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">
                                Elsa
                                <img src="images/verified.png" className="owl-carousel-verified-image img-fluid" alt=""/>
                            </h4>

                            <span className="badge">Influencer</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-youtube"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="owl-carousel-info-wrap item">
                        <img src="images/profile/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background.jpg" className="owl-carousel-image img-fluid" alt=""/>

                        <div className="owl-carousel-info">
                            <h4 className="mb-2">Chan</h4>

                            <span className="badge">Education</span>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-linkedin"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section className="latest-podcast-section section-padding pb-0" id="section_2">
    <div className="container">
        <div className="row justify-content-center">

            <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Lastest episodes</h4>
                </div>
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block d-flex">
                    <div className="">
                        <div className="custom-block-icon-wrap">
                            <div className="section-overlay"></div>
                            <a href="detail-page.html" className="custom-block-image-wrap">
                                <img src="images/podcast/11683425_4790593.jpg" className="custom-block-image img-fluid" alt=""/>

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
                                50 Minutes
                            </small>

                            <small>Episode <span className="badge">15</span></small>
                        </div>

                        <h5 className="mb-2">
                            <a href="detail-page.html">
                                Modern Vintage
                            </a>
                        </h5>

                        <div className="profile-block d-flex">
                            <img src="images/profile/woman-posing-black-dress-medium-shot.jpg" className="profile-block-image img-fluid" alt=""/>

                            <p>
                                Elsa
                                <img src="images/verified.png" className="verified-image img-fluid" alt=""/>
                                <strong>Influencer</strong></p>
                        </div>

                        <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                        <div className="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" className="bi-headphones me-1">
                                <span>120k</span>
                            </a>

                            <a href="#" className="bi-heart me-1">
                                <span>42.5k</span>
                            </a>

                            <a href="#" className="bi-chat me-1">
                                <span>11k</span>
                            </a>

                            <a href="#" className="bi-download">
                                <span>50k</span>
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

            <div className="col-lg-6 col-12">
                <div className="custom-block d-flex">
                    <div className="">
                        <div className="custom-block-icon-wrap">
                            <div className="section-overlay"></div>
                            <a href="detail-page.html" className="custom-block-image-wrap">
                                <img src="images/podcast/12577967_02.jpg" className="custom-block-image img-fluid" alt=""/>

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
                                15 Minutes
                            </small>

                            <small>Episode <span className="badge">45</span></small>
                        </div>

                        <h5 className="mb-2">
                            <a href="detail-page.html">
                                Daily Talk
                            </a>
                        </h5>

                        <div className="profile-block d-flex">
                            <img src="images/profile/handsome-asian-man-listening-music-through-headphones.jpg" className="profile-block-image img-fluid" alt=""/>

                            <p>William
                                <strong>Vlogger</strong></p>
                        </div>

                        <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                        <div className="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" className="bi-headphones me-1">
                                <span>140k</span>
                            </a>

                            <a href="#" className="bi-heart me-1">
                                <span>22.4k</span>
                            </a>

                            <a href="#" className="bi-chat me-1">
                                <span>16k</span>
                            </a>

                            <a href="#" className="bi-download">
                                <span>62k</span>
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

        </div>
    </div>
</section>


<section className="topics-section section-padding pb-0" id="section_3">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Topics</h4>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="images/topics/physician-consulting-his-patient-clinic.jpg" className="custom-block-image img-fluid" alt=""/>
                    </a>

                    <div className="custom-block-info custom-block-overlay-info">
                        <h5 className="mb-1">
                            <a href="listing-page.html">
                                Productivity
                            </a>
                        </h5>

                        <p className="badge mb-0">50 Episodes</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="images/topics/repairman-doing-air-conditioner-service.jpg" className="custom-block-image img-fluid" alt=""/>
                    </a>

                    <div className="custom-block-info custom-block-overlay-info">
                        <h5 className="mb-1">
                            <a href="listing-page.html">
                                Technician
                            </a>
                        </h5>

                        <p className="badge mb-0">12 Episodes</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="images/topics/woman-practicing-yoga-mat-home.jpg" className="custom-block-image img-fluid" alt=""/>
                    </a>

                    <div className="custom-block-info custom-block-overlay-info">
                        <h5 className="mb-1">
                            <a href="listing-page.html">
                                Mindfullness
                            </a>
                        </h5>

                        <p className="badge mb-0">35 Episodes</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="images/topics/delicious-meal-with-sambal-arrangement.jpg" className="custom-block-image img-fluid" alt=""/>
                    </a>

                    <div className="custom-block-info custom-block-overlay-info">
                        <h5 className="mb-1">
                            <a href="listing-page.html">
                                Cooking
                            </a>
                        </h5>

                        <p className="badge mb-0">12 Episodes</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section className="trending-podcast-section section-padding">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Trending episodes</h4>
                </div>
            </div>

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                        <a href="detail-page.html">
                            <img src="images/podcast/27376480_7326766.jpg" className="custom-block-image img-fluid" alt=""/>
                        </a>
                    </div>

                    <div className="custom-block-info">
                        <h5 className="mb-2">
                            <a href="detail-page.html">
                                Vintage Show
                            </a>
                        </h5>

                        <div className="profile-block d-flex">
                            <img src="images/profile/woman-posing-black-dress-medium-shot.jpg" className="profile-block-image img-fluid" alt=""/>

                            <p>Elsa
                                <strong>Influencer</strong></p>
                        </div>

                        <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                        <div className="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" className="bi-headphones me-1">
                                <span>100k</span>
                            </a>

                            <a href="#" className="bi-heart me-1">
                                <span>2.5k</span>
                            </a>

                            <a href="#" className="bi-chat me-1">
                                <span>924k</span>
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

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                        <a href="detail-page.html">
                            <img src="images/podcast/27670664_7369753.jpg" className="custom-block-image img-fluid" alt=""/>
                        </a>
                    </div>

                    <div className="custom-block-info">
                        <h5 className="mb-2">
                            <a href="detail-page.html">
                                Vintage Show
                            </a>
                        </h5>

                        <div className="profile-block d-flex">
                            <img src="images/profile/cute-smiling-woman-outdoor-portrait.jpg" className="profile-block-image img-fluid" alt=""/>

                            <p>
                                Taylor
                                <img src="images/verified.png" className="verified-image img-fluid" alt=""/>
                                <strong>Creator</strong>
                            </p>
                        </div>

                        <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                        <div className="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" className="bi-headphones me-1">
                                <span>100k</span>
                            </a>

                            <a href="#" className="bi-heart me-1">
                                <span>2.5k</span>
                            </a>

                            <a href="#" className="bi-chat me-1">
                                <span>924k</span>
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

            <div className="col-lg-4 col-12">
                <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                        <a href="detail-page.html">
                            <img src="images/podcast/12577967_02.jpg" className="custom-block-image img-fluid" alt=""/>
                        </a>
                    </div>

                    <div className="custom-block-info">
                        <h5 className="mb-2">
                            <a href="detail-page.html">
                                Daily Talk
                            </a>
                        </h5>

                        <div className="profile-block d-flex">
                            <img src="images/profile/handsome-asian-man-listening-music-through-headphones.jpg" className="profile-block-image img-fluid" alt=""/>

                            <p>
                                William
                                <img src="images/verified.png" className="verified-image img-fluid" alt=""/>
                                <strong>Vlogger</strong></p>
                        </div>

                        <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                        <div className="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" className="bi-headphones me-1">
                                <span>100k</span>
                            </a>

                            <a href="#" className="bi-heart me-1">
                                <span>2.5k</span>
                            </a>

                            <a href="#" className="bi-chat me-1">
                                <span>924k</span>
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

        </div>
    </div>
</section>
</main>


<footer className="site-footer">   
<div className="container">
    <div className="row">

        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="subscribe-form-wrap">
                <h6>Subscribe. Every weekly.</h6>

                <form className="custom-form subscribe-form" action="#" method="get" role="form">
                    <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email Address" required="" />

                    <div className="col-lg-12 col-12">
                        <button type="submit" className="form-control" id="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-md-0 mb-lg-0">
            <h6 className="site-footer-title mb-3">Contact</h6>

            <p className="mb-2"><strong className="d-inline me-2">Phone:</strong> 010-020-0340</p>

            <p>
                <strong className="d-inline me-2">Email:</strong>
                <a href="#">inquiry@pod.co</a> 
            </p>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
            <h6 className="site-footer-title mb-3">Download Mobile</h6>

            <div className="site-footer-thumb mb-4 pb-2">
                <div className="d-flex flex-wrap">
                    <a href="#">
                        <img src="images/app-store.png" className="me-3 mb-2 mb-lg-0 img-fluid" alt=""/>
                    </a>

                    <a href="#">
                        <img src="images/play-store.png" className="img-fluid" alt=""/>
                    </a>
                </div>
            </div>

            <h6 className="site-footer-title mb-3">Social</h6>

            <ul className="social-icon">
                <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>
            </ul>
        </div>

    </div>
</div>

<div className="container pt-5">
    <div className="row align-items-center">

        <div className="col-lg-2 col-md-3 col-12">
            <a className="navbar-brand" href="index.html">
                <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk"/>
            </a>
        </div>

        <div className="col-lg-7 col-md-9 col-12">
            <ul className="site-footer-links">
                <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">Homepage</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">Browse episodes</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">Help Center</a>
                </li>

                <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">Contact Us</a>
                </li>
            </ul>
        </div>

        <div className="col-lg-3 col-12">
            <p className="copyright-text mb-0">Copyright © 2036 Talk Pod Company
            <br/><br/>
            Design: <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a></p>
        </div>
    </div>
</div>
</footer>
    </>
  )
}

export default Home
