import React from 'react'
import pro1 from '../../Assets/Images/pro1.png'
import pro2 from '../../Assets/Images/pro2.png'
import pro3 from '../../Assets/Images/pro3.png'
import slider1 from '../../Assets/Images/slider1.png'



import slider4 from '../../Assets/Images/slider4.png'
import slider2 from '../../Assets/Images/slider2.png'
import slider5 from '../../Assets/Images/slider5.png'
import slider3 from '../../Assets/Images/slider3.png'
import slider6 from '../../Assets/Images/slider6.png'


const Home = () => {
    return (


        <>
            <section class="bannerSection bannerSection1">
                <div class="container2">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 responsive0">
                            <div class="bannerSectionText">
                                <h1 class="whiteClr ftSze48  ftWgt700">Find Your Perfect Foreclosure Home</h1>
                                <p class="whiteClr ftSze32 subTitle mb-0 ftWgt400">The Right Location, The Right Price!</p>
                                <div class="searchBox posRel">
                                    <div class="dropdownBlock">
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Foreclosure
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inputBox d-flex align-items-center">
                                        <div class="form-group mb-0 w-100 posRel">
                                            <input type="email" class="form-control topSearch" id=""
                                                aria-describedby="emailHelp" placeholder="Address, city, or ZIP" />
                                        </div>
                                    </div>
                                    <div class="searchBttn searchBttn2 greenBtnBanner ml-auto">
                                        <a href="#" class="greenBtn2 ftWgt700 transition d-flex align-tems-center">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--3 sections--> */}
            <section class="secPad40 sectionArea">
                <div class="container2">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="gridBlock">
                                <h2 class="blackClr ftSze24 ftWgt600">Pre-Foreclosures</h2>
                                <img class="w-100 brdrRads12" src={pro1} />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="gridBlock">
                                <h2 class="blackClr ftSze24 ftWgt500">Foreclosures</h2>
                                <img class="w-100 brdrRads12" src={pro2} />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="gridBlock">
                                <h2 class="blackClr ftSze24 ftWgt500">REO Bank Owned</h2>
                                <img class="w-100 brdrRads12" src={pro3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--map-section--> */}
            <section class="secPad40">
                <div class="container2">
                    <div class="mapSection brdrRads8">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-0 col-xs-0">
                                <div class="mapDotImage">
                                    <img class="w-100" src="assets/img/mapDots.svg" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="mapRightBlock">
                                    <h2 class="ftSze32 ftWgt400 mb-16">Sign up for free Home Auction Deals announcements near
                                        you</h2>
                                    <div class="d-flex align-items-center inputField posRel">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="e.g. johndoe@gmail.com"
                                                aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <a class="getAlerted getAlertedGreen ftWgt700">Get Alerted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--property slider--> */}
            <section class="secPad40 proprtySlder">
                <div class="container2">
                    <div class="titleSection">
                        <h2 class="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                        <p class="blackClr ftSze16 ftWgt500">Showing 1-25 properties of 48</p>
                    </div>
                    <div class="row marginTop">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="owl-carousel owl-theme foreClosureSlider sliderNav">
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="sliderItem">

                                                <img src={slider1} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$559,000</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot orange"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">205 Beechwood Ave, <br />
                                                                Staten Island, NY 10301</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">3</b>beds</li>
                                                            <li><b class="blackClr">1.5</b>baths</li>
                                                            <li><b class="blackClr">3,193</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sliderItem">
                                                <img src={slider4} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot orange"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                Staten Island, NY 10303</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">3</b>beds</li>
                                                            <li><b class="blackClr">2.5</b>baths</li>
                                                            <li><b class="blackClr">2,100</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="sliderItem">
                                                <img src={slider2} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$2,200,000</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot green"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">223 15th St, <br />
                                                                Brooklyn, NY 11215</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">10</b>beds</li>
                                                            <li><b class="blackClr">5</b>baths</li>
                                                            <li><b class="blackClr">5,680</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sliderItem">

                                                <img src={slider5} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$400,950</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot green"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">142 Saratoga Ave, <br />
                                                                Yonkers, NY 10705</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">3</b>beds</li>
                                                            <li><b class="blackClr">1</b>baths</li>
                                                            <li><b class="blackClr">1,694</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="sliderItem">
                                                {/* <img src="assets/img/slider3.png" /> */}
                                                <img src={slider3} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$695,000</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot purple"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">343 Sheffield St, <br />
                                                                Staten Island, NY 10310</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">3</b>beds</li>
                                                            <li><b class="blackClr">2.5</b>baths</li>
                                                            <li><b class="blackClr">1,425</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sliderItem">
                                                {/* <img src="assets/img/slider6.png" /> */}
                                                <img src={slider6} />

                                                <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div class="sliderTextArea">
                                                    <div class="d-flex align-items-center">
                                                        <h5 class="blackClr ftSze24 ftWgt700 mb-0">$499,900</h5>
                                                        <div class="ml-auto statusblock">
                                                            <div class="d-flex align-items-center">
                                                                <div class="dot purple"></div>
                                                                <p class="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-top">
                                                        <div>
                                                            <h4 class="font-weight500 ftSze18 mb-0">23 Targee St, <br />
                                                                Staten Island, NY 10304</h4>
                                                        </div>
                                                    </div>
                                                    <div class="sliderListing">
                                                        <ul class="clearfix d-flex align-items-center">
                                                            <li><b class="blackClr">3</b>beds</li>
                                                            <li><b class="blackClr">1.5</b>baths</li>
                                                            <li><b class="blackClr">752</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div class="linkproperty text-center">
                                                        <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--popular cities--> */}
            <section class="secPad40 popularCities">
                <div class="container2">
                    <div class="titleSection">
                        <h2 class="blackClr ftSze24 ftWgt500">Popular cities</h2>
                    </div>
                    <div class="listingBlock">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul class="noMarginPad list-style-type">
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">New York</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">New York</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Miami</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Florida</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Seattle</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Washington</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Austin</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul class="noMarginPad list-style-type">
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Phoenix</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Arizona</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">San Diego</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Boston</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Massachusetts</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">New Orleans</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Lousiana</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul class="noMarginPad list-style-type">
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Atlanta</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Georgia</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">San Francisco</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Philadelphia</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Pennsylvania</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">San Antonio</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul class="noMarginPad list-style-type">
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Chicago</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Illinois</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Nashville</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Tennesse</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Dallas</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                    <li>
                                        <h3 class="ftSze18 font-weight500 mb-0 blackClr">Los Angeles</h3>
                                        <p class="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--foreclosure city slider--> */}
            <section class="citySlider">
                <div class="container2">
                    <div class="titleSection">
                        <h2 class="blackClr ftSze24 ftWgt500">Foreclosure Homes by Regions</h2>
                    </div>
                    <div class="row marginTop2">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div>
                                <ul class="nav nav-pills owl-carousel owl-theme citySectionSlider2 citySliderNav" id="pills-tab"
                                    role="tablist">
                                    <li class="nav-item item">
                                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home1"
                                            role="tab" aria-controls="pills-home" aria-selected="true">East Region</a>
                                    </li>
                                    <li class="nav-item item">
                                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2"
                                            role="tab" aria-controls="pills-profile" aria-selected="false">Midwest Region</a>
                                    </li>
                                    <li class="nav-item item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">South Region</a>
                                    </li>
                                    <li class="nav-item item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">Southwest Region</a>
                                    </li>
                                    <li class="nav-item item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">West Region</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home1" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div class="listingBlock">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul class="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Maine</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">New York</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Delaware</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul class="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">New Hampshire</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Rhode Island</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Maryland</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul class="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Vermont</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Connecticut</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">New Jersey</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul class="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Massachusetts</h3>
                                                        </li>
                                                        <li>
                                                            <h3 class="ftSze18 font-weight500 mb-0 blackClr">Washington DC</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile2" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        Midwest Region
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        South Region
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        Southwest Region
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        West Region
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Home