import React from 'react'

const SearchResultsList1 = () => {
    return (


        <section className="listingPage secPad16 propertySearchPage">
            <div className="container3">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="filterSection d-flex align-items-center">
                            <div className="dropdown filterDrop">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Listing Types
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div className="dropdown filterDrop">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Property Types
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div className="dropdown filterDrop">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Beds
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div className="dropdown filterDrop">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Baths
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div className="dropdown filterDrop">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SqFt
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="listSearchPage">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="propertSearchMap posRel">
                                        <iframe

                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.440217862213!2d-71.4406597609808!3d42.48219292873229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39110ec925235%3A0x302d6066b1f83b36!2sActon%20Arboretum!5e0!3m2!1sen!2sin!4v1679311560522!5m2!1sen!2sin"

                                            width="100%"
                                            height="100%"

                                            className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        <div className="listingMapBlock d-flex align-items-center itemWebsite">
                                            <img src={require('../../Assets/Images/mapImage.png').default} />
                                            <div className="textAreaBlock">
                                                <p className="mb-0 ftSze18 ftWgt700 blackClr">$457,600</p>
                                                <div className="sliderListing mt-0">
                                                    <ul className="clearfix d-flex align-items-center">
                                                        <li><b className="blackClr">3</b>bd</li>
                                                        <li><b className="blackClr">2.5</b>ba</li>
                                                    </ul>
                                                </div>
                                                <div className="sliderListing mt-0">
                                                    <ul className="clearfix d-flex align-items-center">
                                                        <li><b className="blackClr">2,100</b>Sqft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="propertyListBlock">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="titleSection">
                                                    <h2 className="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                                                    <p className="blackClr ftSze16 ftWgt400">Showing 1-25 properties of 48</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="sliderItem">
                                                    <img src={require('../../Assets/Images/slider1.png').default} />
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
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="sliderItem">
                                                    <img src={require('../../Assets/Images/slider2.png').default} />
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
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="sliderItem">
                                                    <img src={require('../../Assets/Images/slider3.png').default} />
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
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="sliderItem">
                                                    <img src={require('../../Assets/Images/slider4.png').default} />
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

export default SearchResultsList1