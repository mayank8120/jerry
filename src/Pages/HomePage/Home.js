import React, { useState } from 'react'
import pro1 from '../../Assets/Images/pro1.png'
import pro2 from '../../Assets/Images/pro2.png'
import pro3 from '../../Assets/Images/pro3.png'
import slider1 from '../../Assets/Images/slider1.png'



import slider4 from '../../Assets/Images/slider4.png'
import slider2 from '../../Assets/Images/slider2.png'
import slider5 from '../../Assets/Images/slider5.png'
import slider3 from '../../Assets/Images/slider3.png'
import slider6 from '../../Assets/Images/slider6.png'
import TabsSection from './TabsSection'


const Home = () => {

   

    return (


        <>
            <section className="bannerSection bannerSection1">
                <div className="container2">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 responsive0">
                            <div className="bannerSectionText">
                                <h1 className="whiteClr ftSze48  ftWgt700">Find Your Perfect Foreclosure Home</h1>
                                <p className="whiteClr ftSze32 subTitle mb-0 ftWgt400">The Right Location, The Right Price!</p>
                                <div className="searchBox posRel">
                                    <div className="dropdownBlock">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Foreclosure
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputBox d-flex align-items-center">
                                        <div className="form-group mb-0 w-100 posRel">
                                            <input type="email" className="form-control topSearch" id=""
                                                aria-describedby="emailHelp" placeholder="Address, city, or ZIP" />
                                        </div>
                                    </div>
                                    <div className="searchBttn searchBttn2 greenBtnBanner ml-auto">
                                        <a href="#" className="greenBtn2 ftWgt700 transition d-flex align-tems-center">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--3 sections--> */}
            <section className="secPad40 sectionArea">
                <div className="container2">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="gridBlock">
                                <h2 className="blackClr ftSze24 ftWgt600">Pre-Foreclosures</h2>
                                <img className="w-100 brdrRads12" src={pro1} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="gridBlock">
                                <h2 className="blackClr ftSze24 ftWgt500">Foreclosures</h2>
                                <img className="w-100 brdrRads12" src={pro2} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="gridBlock">
                                <h2 className="blackClr ftSze24 ftWgt500">REO Bank Owned</h2>
                                <img className="w-100 brdrRads12" src={pro3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--map-section--> */}
            <section className="secPad40">
                <div className="container2">
                    <div className="mapSection brdrRads8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-0 col-xs-0">
                                <div className="mapDotImage">
                                    <img className="w-100" src="assets/img/mapDots.svg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mapRightBlock">
                                    <h2 className="ftSze32 ftWgt400 mb-16">Sign up for free Home Auction Deals announcements near
                                        you</h2>
                                    <div className="d-flex align-items-center inputField posRel">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="e.g. johndoe@gmail.com"
                                                aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <a className="getAlerted getAlertedGreen ftWgt700">Get Alerted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--property slider--> */}
            <section className="secPad40 proprtySlder">
                <div className="container2">
                    <div className="titleSection">
                        <h2 className="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                        <p className="blackClr ftSze16 ftWgt500">Showing 1-25 properties of 48</p>
                    </div>
                    <div className="row marginTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="owl-carousel owl-theme foreClosureSlider sliderNav">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="sliderItem">

                                                <img src={slider1} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$559,000</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot orange"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">205 Beechwood Ave, <br />
                                                                Staten Island, NY 10301</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">3</b>beds</li>
                                                            <li><b className="blackClr">1.5</b>baths</li>
                                                            <li><b className="blackClr">3,193</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sliderItem">
                                                <img src={slider4} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot orange"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                Staten Island, NY 10303</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">3</b>beds</li>
                                                            <li><b className="blackClr">2.5</b>baths</li>
                                                            <li><b className="blackClr">2,100</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="sliderItem">
                                                <img src={slider2} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$2,200,000</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot green"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">223 15th St, <br />
                                                                Brooklyn, NY 11215</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">10</b>beds</li>
                                                            <li><b className="blackClr">5</b>baths</li>
                                                            <li><b className="blackClr">5,680</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sliderItem">

                                                <img src={slider5} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$400,950</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot green"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">142 Saratoga Ave, <br />
                                                                Yonkers, NY 10705</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">3</b>beds</li>
                                                            <li><b className="blackClr">1</b>baths</li>
                                                            <li><b className="blackClr">1,694</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="sliderItem">
                                                {/* <img src="assets/img/slider3.png" /> */}
                                                <img src={slider3} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$695,000</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot purple"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">343 Sheffield St, <br />
                                                                Staten Island, NY 10310</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">3</b>beds</li>
                                                            <li><b className="blackClr">2.5</b>baths</li>
                                                            <li><b className="blackClr">1,425</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sliderItem">
                                                {/* <img src="assets/img/slider6.png" /> */}
                                                <img src={slider6} />

                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$499,900</h5>
                                                        <div className="ml-auto statusblock">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dot purple"></div>
                                                                <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight500 ftSze18 mb-0">23 Targee St, <br />
                                                                Staten Island, NY 10304</h4>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b className="blackClr">3</b>beds</li>
                                                            <li><b className="blackClr">1.5</b>baths</li>
                                                            <li><b className="blackClr">752</b>sq.ft</li>
                                                        </ul>
                                                    </div>
                                                    <div className="linkproperty text-center">
                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View Property Details</a>
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
            <section className="secPad40 popularCities">
                <div className="container2">
                    <div className="titleSection">
                        <h2 className="blackClr ftSze24 ftWgt500">Popular cities</h2>
                    </div>
                    <div className="listingBlock">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul className="noMarginPad list-style-type">
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">New York</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">New York</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Miami</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Florida</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Seattle</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Washington</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Austin</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul className="noMarginPad list-style-type">
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Phoenix</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Arizona</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">San Diego</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Boston</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Massachusetts</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">New Orleans</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Lousiana</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul className="noMarginPad list-style-type">
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Atlanta</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Georgia</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">San Francisco</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Philadelphia</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Pennsylvania</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">San Antonio</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <ul className="noMarginPad list-style-type">
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Chicago</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Illinois</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Nashville</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Tennesse</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Dallas</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">Texas</p>
                                    </li>
                                    <li>
                                        <h3 className="ftSze18 font-weight500 mb-0 blackClr">Los Angeles</h3>
                                        <p className="ftSze16 font-weight400 mb-0 secondaryColor">California</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--foreclosure city slider--> */}
            <section className="citySlider">
                <div className="container2">
                    <div className="titleSection">
                        <h2 className="blackClr ftSze24 ftWgt500">Foreclosure Homes by Regions</h2>
                    </div>
                    <div className="row marginTop2">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div>
                                <ul className="nav nav-pills owl-carousel owl-theme citySectionSlider2 citySliderNav" id="pills-tab"
                                    role="tablist">
                                    <li className="nav-item item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home1"
                                            role="tab" aria-controls="pills-home" aria-selected="true">East Region</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2"
                                            role="tab" aria-controls="pills-profile" aria-selected="false">Midwest Region</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">South Region</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">Southwest Region</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact3"
                                            role="tab" aria-controls="pills-contact" aria-selected="false">West Region</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home1" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div className="listingBlock">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul className="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Maine</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">New York</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Delaware</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul className="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">New Hampshire</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Rhode Island</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Maryland</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul className="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Vermont</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Connecticut</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">New Jersey</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                    <ul className="noMarginPad list-style-type">
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Massachusetts</h3>
                                                        </li>
                                                        <li>
                                                            <h3 className="ftSze18 font-weight500 mb-0 blackClr">Washington DC</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile2" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        Midwest Region
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        South Region
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        Southwest Region
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        West Region
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <TabsSection />
        </>


    )
}

export default Home