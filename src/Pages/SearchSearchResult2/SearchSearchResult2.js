import React from 'react'
import slider10 from '../../Assets/Images/slider10.png';
const SearchSearchResult2 = () => {
    return (
        <section className="listingPage secPad16 propertySearchPage">
            <div className="container3">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="listSearchPage">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                    <div className="filterWhiteBox">
                                        <div className="accordion" id="accordionExample">
                                            <div className="">
                                                <div className="" id="headingOne">
                                                    <h2 className="d-flex align-items-center mb-16">
                                                        <button className="btn btn-link btn-block text-left ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Listing Types
                                                        </button>
                                                        <div className="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div className="">
                                                        <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input className="mr-8" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck1">
                                                                Foreclosures
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input className="mr-8" type="checkbox" value="" id="defaultCheck2" />
                                                            <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck2">
                                                                REO Bank Owned
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input className="mr-8" type="checkbox" value="" id="defaultCheck3" />
                                                            <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck3">
                                                                Pre-Foreclosures
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="brdrLine"></div>
                                            <div className="">
                                                <div className="" id="headingTwo">
                                                    <h2 className="d-flex align-items-center mb-16">
                                                        <button className="btn btn-link btn-block text-left ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Property Types
                                                        </button>
                                                        <div className="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div className="">
                                                        <div className="">
                                                            <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input className="mr-8" type="checkbox" value="" id="defaultCheck4" />
                                                                <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck4">
                                                                    Single-Family
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input className="mr-8" type="checkbox" value="" id="defaultCheck5" />
                                                                <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck5">
                                                                    Condo
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input className="mr-8" type="checkbox" value="" id="defaultCheck6" />
                                                                <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck6">
                                                                    Multi-Family
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input className="mr-8" type="checkbox" value="" id="defaultCheck7" />
                                                                <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck7">
                                                                    Mobile Home
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input className="mr-8" type="checkbox" value="" id="defaultCheck8" />
                                                                <label className="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck8">
                                                                    Commercial
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="brdrLine"></div>
                                            <div className="">
                                                <div className="" id="headingThree">
                                                    <h2 className="d-flex align-items-center mb-0">
                                                        <button className="btn btn-link btn-block text-left collapsed ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Residence
                                                        </button>
                                                        <div className="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div className="">
                                                        <div className="d-flex align-items-center mb-16">
                                                            <h4 className="ftSze16 ftWgt500 blackClr">Beds</h4>
                                                            <div className="ml-auto">
                                                                <div className="d-flex align-items-center">
                                                                    <a href="#" className="circleBox">
                                                                        <img src={require('../../Assets/Images/minus.svg').default} />
                                                                    </a>
                                                                    <p className="mb-0 countnum">0+</p>
                                                                    <a href="#" className="circleBox">
                                                                        <img src={require('../../Assets/Images/plus.svg').default} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-16">
                                                            <h4 className="ftSze16 ftWgt500 blackClr">Baths</h4>
                                                            <div className="ml-auto">
                                                                <div className="d-flex align-items-center">
                                                                    <a href="#" className="circleBox">
                                                                        <img src={require('../../Assets/Images/minus.svg').default} />
                                                                    </a>
                                                                    <p className="mb-0 countnum">0+</p>
                                                                    <a href="#" className="circleBox">
                                                                        <img src={require('../../Assets/Images/plus.svg').default} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-16">
                                                            <h4 className="ftSze16 ftWgt500 blackClr">SqFt</h4>
                                                            <div className="d-flex align-items-center">
                                                                <div className="lineDropDown">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            500 SqFt
                                                                        </button>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                            <a className="dropdown-item" href="#">Action</a>
                                                                            <a className="dropdown-item" href="#">Another action</a>
                                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0"><img src={require('../../Assets/Images/minus.svg').default} /></p>
                                                                <div className="lineDropDown">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            2,250 SqFt
                                                                        </button>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                            <a className="dropdown-item" href="#">Action</a>
                                                                            <a className="dropdown-item" href="#">Another action</a>
                                                                            <a className="dropdown-item" href="#">Something else here</a>
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
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                    <div className="propertyListBlock">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="titleSection">
                                                    <h2 className="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                                                    <p className="blackClr ftSze16 ftWgt400">Showing 1-25 properties of 48</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    <img src={slider10} alt="SLIDER10" />
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
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    {/* <img src={require('../../Assets/Images/slider11.png').default} /> */}
                                                    <img src={slider10} alt="SLIDER10" />
                                                    <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div className="sliderTextArea">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div className="ml-auto statusblock">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dot purple"></div>
                                                                    <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
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
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    {/* <img src={require('../../Assets/Images/slider12.png').default} /> */}
                                                    <img src={slider10} alt="SLIDER10" />
                                                    <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div className="sliderTextArea">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div className="ml-auto statusblock">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dot green"></div>
                                                                    <p className="mb-0 ftSze14 ftWgt500">FORECLOSURES</p>
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
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    {/* <img src={require('../../Assets/Images/slider13.png').default} /> */}
                                                    <img src={slider10} alt="SLIDER10" />
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
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    {/* <img src={require('../../Assets/Images/slider1.png').default} /> */}
                                                    <img src={slider10} alt="SLIDER10" />
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
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="sliderItem">
                                                    {/* <img src={require('../../Assets/Images/slider9.png').default} /> */}
                                                    <img src={slider10} alt="SLIDER10" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSearchResult2