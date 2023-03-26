import React from 'react'

const SearchResultsList1 = () => {
    return (


        <section class="listingPage secPad16 propertySearchPage">
            <div class="container3">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="filterSection d-flex align-items-center">
                            <div class="dropdown filterDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Listing Types
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown filterDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Property Types
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown filterDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Beds
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown filterDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Baths
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown filterDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SqFt
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="listSearchPage">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div class="propertSearchMap posRel">
                                        <iframe

                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.440217862213!2d-71.4406597609808!3d42.48219292873229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39110ec925235%3A0x302d6066b1f83b36!2sActon%20Arboretum!5e0!3m2!1sen!2sin!4v1679311560522!5m2!1sen!2sin"

                                            width="100%"
                                            height="100%"

                                            class="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        <div class="listingMapBlock d-flex align-items-center itemWebsite">
                                            <img src={require('../../Assets/Images/mapImage.png').default} />
                                            <div class="textAreaBlock">
                                                <p class="mb-0 ftSze18 ftWgt700 blackClr">$457,600</p>
                                                <div class="sliderListing mt-0">
                                                    <ul class="clearfix d-flex align-items-center">
                                                        <li><b class="blackClr">3</b>bd</li>
                                                        <li><b class="blackClr">2.5</b>ba</li>
                                                    </ul>
                                                </div>
                                                <div class="sliderListing mt-0">
                                                    <ul class="clearfix d-flex align-items-center">
                                                        <li><b class="blackClr">2,100</b>Sqft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div class="propertyListBlock">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="titleSection">
                                                    <h2 class="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                                                    <p class="blackClr ftSze16 ftWgt400">Showing 1-25 properties of 48</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider1.png').default} />
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
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider2.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot purple"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
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
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider3.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot green"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">FORECLOSURES</p>
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
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider4.png').default} />
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